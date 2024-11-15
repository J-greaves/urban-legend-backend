import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoriesService {
  constructor(private prisma: PrismaService) {}

  async getAllStories() {
    const stories = await this.prisma.stories.findMany();
    return stories;
  }

  async getStoryById(id: number) {
    return this.prisma.stories.findUnique({
      where: { id },
    });
  }

  async createStory(data: {
    title: string;
    story_type: string;
    story: string;
    latlong: string;
    location: string;
    authorId: number | null;
  }) {
    return this.prisma.stories.create({
      data,
    });
  }

  async deleteStory(id: number) {
    return this.prisma.stories.delete({
      where: { id },
    });
  }
}
