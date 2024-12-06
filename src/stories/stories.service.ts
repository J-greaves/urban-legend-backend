import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoriesService {
  constructor(private prisma: PrismaService) {}

  async getAllStories() {
    const stories = await this.prisma.story.findMany();
    return stories;
  }

  async getStoryById(id: number) {
    return this.prisma.story.findUnique({
      where: { id },
    });
  }

  async createStory(data: {
    title: string;
    story_type: string;
    story: string;
    latlong: [number, number];
    location: string;
    authorId: number | null;
    imageUrl: string;
  }) {
    console.log('story to create', data);
    return this.prisma.story.create({
      data,
    });
  }

  async deleteStory(id: number) {
    return this.prisma.story.delete({
      where: { id },
    });
  }
}
