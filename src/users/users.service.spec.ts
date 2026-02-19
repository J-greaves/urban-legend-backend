import { ConflictException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from './users.service';

const mockUser = {
  id: 1,
  email: 'test@example.com',
  userName: 'TestUser',
  avatarUrl: null,
  passwordHash: null,
  createdAt: new Date(),
};

const mockStory = {
  id: 1,
  title: 'A Ghost Story',
  story_type: 'ghost story',
  story: 'It was a dark and stormy night...',
  latlong: [51.5, -0.12],
  location: 'London',
  authorId: 1,
  imageUrl: null,
  createdAt: new Date(),
};

const mockPrisma = {
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
  story: {
    findMany: jest.fn(),
  },
};

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  describe('findUserByEmail', () => {
    it('returns the user when found', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(mockUser);
      const result = await service.findUserByEmail('test@example.com');
      expect(result).toEqual(mockUser);
    });

    it('returns null when user does not exist', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      const result = await service.findUserByEmail('nobody@example.com');
      expect(result).toBeNull();
    });
  });

  describe('createUser', () => {
    it('creates a user when the email is not taken', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      mockPrisma.user.create.mockResolvedValue(mockUser);

      const result = await service.createUser({
        email: 'test@example.com',
        userName: 'TestUser',
      });

      expect(mockPrisma.user.create).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockUser);
    });

    it('throws ConflictException when email is already in use', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(mockUser);

      await expect(
        service.createUser({ email: 'test@example.com', userName: 'TestUser' }),
      ).rejects.toThrow(ConflictException);
      expect(mockPrisma.user.create).not.toHaveBeenCalled();
    });
  });

  describe('getUserStories', () => {
    it("returns the user's favourite and submitted stories", async () => {
      mockPrisma.user.findUnique.mockResolvedValue(mockUser);
      mockPrisma.story.findMany
        .mockResolvedValueOnce([mockStory])  // favoriteStories
        .mockResolvedValueOnce([mockStory]); // submittedStories

      const result = await service.getUserStories(1);

      expect(result).toEqual({
        favoriteStories: [mockStory],
        submittedStories: [mockStory],
      });
    });

    it('throws NotFoundException when user does not exist', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      await expect(service.getUserStories(999)).rejects.toThrow(NotFoundException);
    });
  });
});
