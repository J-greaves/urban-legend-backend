import {
  IsString,
  IsArray,
  IsOptional,
  IsNumber,
  ArrayMinSize,
  IsLatitude,
  IsLongitude,
} from 'class-validator';

export class CreateStoryDto {
  @IsString()
  title: string;

  @IsString()
  story_type: string;

  @IsString()
  story: string;

  @IsString()
  location: string;

  @IsOptional()
  @IsNumber()
  authorId: number | null;

  @IsOptional()
  @IsString()
  imageUrl: string;

  @IsArray()
  @ArrayMinSize(2)
  latlong: [number, number];
}
