import { Controller, Post, Body } from '@nestjs/common';
import { AwsS3Service } from './aws-s3.service';

interface PresignRequest {
  filename: string;
  filetype: string;
}

@Controller('aws-s3')
export class AwsS3Controller {
  constructor(private readonly awsS3Service: AwsS3Service) {}

  @Post('generate-presigned-url')
  async getPresignedUrl(@Body() body: PresignRequest) {
    const { filename, filetype } = body; // Get file name and type from the body
    const key = `uploads/${filename}`; // Customize the key (e.g., the folder path in S3)
    const url = await this.awsS3Service.generatePresignedUrl(
      'loremapper',
      key,
      filetype,
    ); // Pass fileType as well

    return { url };
  }
}
