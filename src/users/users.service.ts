import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Find a user by email
  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  // Create a new user
  async createUser(createUserDto: CreateUserDto) {
    const { email, userName, avatarUrl } = createUserDto;

    const user = await this.prisma.user.create({
      data: {
        email,
        userName,
        avatarUrl,
      },
    });

    return user;
  }

  // Fetch all users submitted and favourited stories
  async getUserStories(userId: number) {
    // Fetch the user's favorite stories and submitted stories
    const [favoriteStories, submittedStories] = await Promise.all([
      this.prisma.story.findMany({
        where: {
          favoritedBy: {
            some: {
              userId: userId, // Match userId in the StoryFavorites table
            },
          },
        },
        include: {
          author: true, // Optionally include author details
        },
      }),
      this.prisma.story.findMany({
        where: {
          authorId: userId, // Match the user's ID with the authorId
        },
      }),
    ]);

    return {
      favoriteStories,
      submittedStories,
    };
  }
}
