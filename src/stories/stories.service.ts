import { Injectable, NotFoundException } from '@nestjs/common';
import { Story } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStoryDto } from './create-story.dto';

@Injectable()
export class StoriesService {
  constructor(private prisma: PrismaService) {}

  async getAllStories(): Promise<Story[]> {
    return this.prisma.story.findMany();
  }

  async getStoryById(id: number): Promise<Story> {
    const story = await this.prisma.story.findUnique({ where: { id } });
    if (!story) {
      throw new NotFoundException(`Story with id ${id} not found`);
    }
    return story;
  }

  async createStory(dto: CreateStoryDto, authorId: number): Promise<Story> {
    const { title, story_type, story, latlong, location, imageUrl } = dto;
    return this.prisma.story.create({
      data: { title, story_type, story, latlong, location, imageUrl, authorId },
    });
  }

  async deleteStory(id: number): Promise<Story> {
    try {
      return await this.prisma.story.delete({ where: { id } });
    } catch {
      throw new NotFoundException(`Story with id ${id} not found`);
    }
  }
}
