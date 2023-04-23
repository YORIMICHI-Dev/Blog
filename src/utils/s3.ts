// s3のバケットから画像を取得する
import AWS from 'aws-sdk';
import dotenv from "dotenv";
dotenv.config();

// S3設定
const s3 = new AWS.S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});


interface ImageData {
    ContentType: string;
    Body: Buffer;
}


// ブログで使用するイメージをバケットから取得
export async function getImageFromS3(bucket: string, key: string): Promise<ImageData> {
    try {
        const params = {
        Bucket: bucket,
        Key: key,
        };

        const data = await s3.getObject(params).promise();
        return data as ImageData;
    } catch (error) {
        console.error('Error getting image from S3:', error);
        throw error;
    }
}
