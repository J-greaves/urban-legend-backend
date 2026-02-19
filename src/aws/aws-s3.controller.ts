import { Body, Controller, Post } from '@nestjs/common';
import { AwsS3Service } from './aws-s3.service';

interface PresignRequest {
  filename: string;
  filetype: string;
}

@Controller('aws-s3')
export class AwsS3Controller {
  constructor(private readonly awsS3Service: AwsS3Service) {}

  @Post('generate-presigned-url')
  async getPresignedUrl(@Body() body: PresignRequest): Promise<{ url: string }> {
    const { filename, filetype } = body;
    const bucket = process.env.AWS_S3_BUCKET ?? 'loremapper';
    const key = `uploads/${filename}`;
    const url = await this.awsS3Service.generatePresignedUrl(bucket, key, filetype);
    return { url };
  }
}
