import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { CreateStoryDto } from './create-story.dto';

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
    CreateStoryDto: CreateStoryDto,
  ) {
    return this.storiesService.createStory(CreateStoryDto);
  }

  @Delete(':id')
  async deleteStory(@Param('id') id: string) {
    return this.storiesService.deleteStory(Number(id));
  }
}
