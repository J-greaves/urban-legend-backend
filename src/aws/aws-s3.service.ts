import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class AwsS3Service {
  private s3: AWS.S3;

  constructor() {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION ?? 'eu-west-2',
    });
    this.s3 = new AWS.S3();
  }

  async generatePresignedUrl(
    bucket: string,
    key: string,
    fileType: string,
  ): Promise<string> {
    const params = {
      Bucket: bucket,
      Key: key,
      Expires: 60 * 5,
      ContentType: fileType,
    };

    return this.s3.getSignedUrlPromise('putObject', params);
  }
}
