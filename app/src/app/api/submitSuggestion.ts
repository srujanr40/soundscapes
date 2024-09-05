import * as uuid from 'uuid';
import AWS from 'aws-sdk';


AWS.config.update({
    region: process.env.AWS_REGION,
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
      const { email, suggestion } = req.body;
  
      if (!email || !suggestion) {
        return res.status(400).json({ error: 'Email and suggestion are required.' });
      }
      
      const suggestionID: string = uuid.v4();
      const tableName: string = String(process.env.TABLE_NAME);

      const params = {
        TableName: tableName,
        Item: {
          'suggestion-id': suggestionID,
          email,
          suggestion,
        },
      };
  
      try {
        await dynamoDb.put(params).promise();
        res.status(200).json({ message: 'Suggestion submitted successfully!' });
      } catch (error) {
        console.error('Error adding suggestion to DynamoDB:', error);
        res.status(500).json({ error: 'Could not submit suggestion' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
