import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Story, User } from '@prisma/client';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('check-user')
  @ApiOperation({ summary: 'Check if a user exists by email' })
  @ApiQuery({ name: 'email', required: true, example: 'user@example.com' })
  @ApiResponse({ status: 200, description: 'Returns the user or null' })
  async checkUser(
    @Query('email') email: string,
  ): Promise<{ user: User | null }> {
    const user = await this.usersService.findUserByEmail(email);
    return { user };
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a new user (legacy — prefer POST /auth/register)' })
  @ApiResponse({ status: 201, description: 'User created' })
  @ApiConflictResponse({ description: 'Email already in use' })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Get(':id/stories')
  @ApiOperation({ summary: "Get a user's submitted and favourited stories" })
  @ApiResponse({ status: 200, description: "User's stories" })
  @ApiNotFoundResponse({ description: 'User not found' })
  async getUserStories(
    @Param('id', ParseIntPipe) userId: number,
  ): Promise<{ favoriteStories: Story[]; submittedStories: Story[] }> {
    return this.usersService.getUserStories(userId);
  }
}
