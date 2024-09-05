import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid'; 
import { NextResponse } from 'next/server';

AWS.config.update({
  region: process.env.AWS_REGION,
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function POST(req: any) {
  const { email, suggestion } = await req.json();

  if (!email || !suggestion) {
    return NextResponse.json({ error: 'Email and suggestion are required.' }, { status: 400 });
  }

  const suggestionId = uuidv4();
  const tableName: string = String(process.env.TABLE_NAME);

  const params = {
    TableName: tableName,
    Item: {
      'suggestion-id': suggestionId, // Use UUID as the primary key
      email,
      suggestion,
    },
  };

  try {
    await dynamoDb.put(params).promise();
    return NextResponse.json({ message: 'Suggestion submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error adding suggestion to DynamoDB:', error);
    return NextResponse.json({ error: 'Could not submit suggestion' }, { status: 500 });
  }
}
