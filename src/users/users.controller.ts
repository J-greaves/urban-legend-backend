import { Controller, Get, Query, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Endpoint to check if a user exists by email
  @Get('check-user')
  async checkUser(@Query('email') email: string) {
    const user = await this.usersService.findUserByEmail(email);
    return { user };
  }

  // Endpoint to create a new user
  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get(':id/stories')
  async getUserStories(@Param('id') userId: string) {
    const userStories = await this.usersService.getUserStories(Number(userId));
    return userStories;
  }
}
