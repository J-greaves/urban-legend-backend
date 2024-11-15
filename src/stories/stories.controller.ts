import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { StoriesService } from './stories.service';

@Controller('stories')
export class StoriesController {
  constructor(private storiesService: StoriesService) {}

  @Get()
  async getAllStories() {
    return this.storiesService.getAllStories();
  }

  @Get(':id')
  async getStoryById(@Param('id') id: string) {
    return this.storiesService.getStoryById(Number(id));
  }

  @Post()
  async createStory(
    @Body()
    body: {
      title: string;
      story_type: string;
      story: string;
      latlong: string;
      location: string;
      authorId: number | null;
    },
  ) {
    return this.storiesService.createStory(body);
  }

  @Delete(':id')
  async deleteStory(@Param('id') id: string) {
    return this.storiesService.deleteStory(Number(id));
  }
}
