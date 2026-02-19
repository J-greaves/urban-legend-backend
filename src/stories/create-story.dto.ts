import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export enum StoryType {
  Myth = 'myth',
  Legend = 'legend',
  Folktale = 'folktale',
  GhostStory = 'ghost story',
  HistoricFact = 'historic fact',
  UrbanLegend = 'urban legend',
  Aliens = 'aliens',
  Song = 'song',
  FairyTale = 'fairy tale',
}

export class CreateStoryDto {
  @ApiProperty({ example: 'The Headless Horseman' })
  @IsString()
  title: string;

  @ApiProperty({ enum: StoryType, example: StoryType.Legend })
  @IsEnum(StoryType)
  story_type: StoryType;

  @ApiProperty({ example: 'Long ago in Sleepy Hollow...' })
  @IsString()
  story: string;

  @ApiProperty({ example: 'Sleepy Hollow, New York' })
  @IsString()
  location: string;

  @ApiPropertyOptional({ example: 'https://example.com/image.jpg' })
  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @ApiProperty({
    description: '[latitude, longitude]',
    example: [41.0855, -73.8618],
    type: [Number],
  })
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  latlong: [number, number];
}
