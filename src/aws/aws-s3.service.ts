import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

// Configure the AWS SDK with your credentials
AWS.config.update({
  accessKeyId: 'FIGURE OUT ISSUE WIT DOT ENV', // Access key ID from IAM
  secretAccessKey: 'FIGURE OUT ISSUE WIT DOT ENV', // Secret access key from IAM
  region: 'us-east-1', // Your S3 bucket region
});

@Injectable()
export class AwsS3Service {
  private s3 = new AWS.S3();

  // Generate pre-signed URL for S3 upload
  async generatePresignedUrl(
    bucket: string,
    key: string,
    fileType: string,
  ): Promise<string> {
    const params = {
      Bucket: bucket,
      Key: key,
      Expires: 60 * 5, // URL expiration time (5 minutes)
      ContentType: fileType, // Use the dynamic content type for file upload
    };

    return new Promise((resolve, reject) => {
      this.s3.getSignedUrl('putObject', params, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  }
}
