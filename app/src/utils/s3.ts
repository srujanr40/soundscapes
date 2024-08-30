import AWS from 'aws-sdk'

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const getImage = async (key: string) => {
  const params = {
    Bucket: 'your-bucket-name',
    Key: key,
  };

  try {
    const data = await s3.getObject(params).promise();
    return `data:image/jpeg;base64,${data.Body?.toString('base64')}`;
  } catch (error) {
    console.error('Error fetching image from S3', error);
    throw error;
  }
};