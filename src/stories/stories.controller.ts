import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Story } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JwtPayload } from 'src/auth/strategies/jwt.strategy';
import { CreateStoryDto } from './create-story.dto';
import { StoriesService } from './stories.service';

interface AuthenticatedRequest extends Express.Request {
  user: JwtPayload;
}

@ApiTags('stories')
@Controller('stories')
export class StoriesController {
  constructor(private storiesService: StoriesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all stories' })
  @ApiResponse({ status: 200, description: 'List of all stories' })
  async getAllStories(): Promise<Story[]> {
    return this.storiesService.getAllStories();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a story by ID' })
  @ApiResponse({ status: 200, description: 'The story' })
  @ApiNotFoundResponse({ description: 'Story not found' })
  async getStoryById(@Param('id', ParseIntPipe) id: number): Promise<Story> {
    return this.storiesService.getStoryById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new story (requires authentication)' })
  @ApiResponse({ status: 201, description: 'Story created' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT' })
  async createStory(
    @Body() dto: CreateStoryDto,
    @Request() req: AuthenticatedRequest,
  ): Promise<Story> {
    return this.storiesService.createStory(dto, req.user.sub);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a story by ID (requires authentication)' })
  @ApiResponse({ status: 200, description: 'Story deleted' })
  @ApiNotFoundResponse({ description: 'Story not found' })
  @ApiUnauthorizedResponse({ description: 'Missing or invalid JWT' })
  async deleteStory(@Param('id', ParseIntPipe) id: number): Promise<Story> {
    return this.storiesService.deleteStory(id);
  }
}
