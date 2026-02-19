import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { StoryType } from './create-story.dto';
import { StoriesService } from './stories.service';

const mockStory = {
  id: 1,
  title: 'The Headless Horseman',
  story_type: 'legend',
  story: 'A tale from Sleepy Hollow...',
  latlong: [41.0855, -73.8618],
  location: 'Sleepy Hollow, NY',
  authorId: 1,
  imageUrl: null,
  createdAt: new Date(),
};

const mockPrisma = {
  story: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    delete: jest.fn(),
  },
};

describe('StoriesService', () => {
  let service: StoriesService;

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoriesService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<StoriesService>(StoriesService);
  });

  describe('getAllStories', () => {
    it('returns all stories from the database', async () => {
      mockPrisma.story.findMany.mockResolvedValue([mockStory]);
      const result = await service.getAllStories();
      expect(result).toEqual([mockStory]);
      expect(mockPrisma.story.findMany).toHaveBeenCalledTimes(1);
    });
  });

  describe('getStoryById', () => {
    it('returns a story when it exists', async () => {
      mockPrisma.story.findUnique.mockResolvedValue(mockStory);
      const result = await service.getStoryById(1);
      expect(result).toEqual(mockStory);
      expect(mockPrisma.story.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('throws NotFoundException when story does not exist', async () => {
      mockPrisma.story.findUnique.mockResolvedValue(null);
      await expect(service.getStoryById(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('createStory', () => {
    it('creates a story with the correct data', async () => {
      const dto = {
        title: 'The Headless Horseman',
        story_type: StoryType.Legend,
        story: 'A tale from Sleepy Hollow...',
        location: 'Sleepy Hollow, NY',
        latlong: [41.0855, -73.8618] as [number, number],
      };
      mockPrisma.story.create.mockResolvedValue({ ...mockStory, ...dto, authorId: 1 });

      const result = await service.createStory(dto, 1);

      expect(mockPrisma.story.create).toHaveBeenCalledWith({
        data: expect.objectContaining({ title: dto.title, authorId: 1 }),
      });
      expect(result.authorId).toBe(1);
    });
  });

  describe('deleteStory', () => {
    it('deletes and returns the story', async () => {
      mockPrisma.story.delete.mockResolvedValue(mockStory);
      const result = await service.deleteStory(1);
      expect(result).toEqual(mockStory);
      expect(mockPrisma.story.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('throws NotFoundException when story does not exist', async () => {
      mockPrisma.story.delete.mockRejectedValue(new Error('Record not found'));
      await expect(service.deleteStory(999)).rejects.toThrow(NotFoundException);
    });
  });
});
