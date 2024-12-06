import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoriesModule } from './stories/stories.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AwsS3Module } from './aws/aws-s3.module';

@Module({
  imports: [StoriesModule, UsersModule, PrismaModule, AwsS3Module],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
