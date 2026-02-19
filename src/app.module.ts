import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AwsS3Module } from './aws/aws-s3.module';
import { PrismaModule } from './prisma/prisma.module';
import { StoriesModule } from './stories/stories.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, StoriesModule, UsersModule, PrismaModule, AwsS3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
