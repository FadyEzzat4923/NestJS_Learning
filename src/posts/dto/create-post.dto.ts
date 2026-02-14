/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 1000)
  content: string;
}
