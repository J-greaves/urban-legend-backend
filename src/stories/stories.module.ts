import { Module } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { PrismaModule } from '../prisma/prisma.module';
import { StoriesController } from './stories.controller';

@Module({
  imports: [PrismaModule],
  providers: [StoriesService],
  controllers: [StoriesController],
})
export class StoriesModule {}
