import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Story, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { email, userName, avatarUrl } = createUserDto;

    const existing = await this.prisma.user.findUnique({ where: { email } });
    if (existing) {
      throw new ConflictException(`A user with email ${email} already exists`);
    }

    return this.prisma.user.create({ data: { email, userName, avatarUrl } });
  }

  async getUserStories(
    userId: number,
  ): Promise<{ favoriteStories: Story[]; submittedStories: Story[] }> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }

    const [favoriteStories, submittedStories] = await Promise.all([
      this.prisma.story.findMany({
        where: { favoritedBy: { some: { userId } } },
        include: { author: true },
      }),
      this.prisma.story.findMany({
        where: { authorId: userId },
      }),
    ]);

    return { favoriteStories, submittedStories };
  }
}
