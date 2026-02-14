import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  private readonly posts: CreatePostDto[] = [];

  create(createPostDto: CreatePostDto) {
    this.posts.push(createPostDto);
    return createPostDto;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    const post = this.posts[id];
    if (!post) {
      throw new Error(`Post with ID ${id} not found`);
    }
    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      throw new Error(`Post with ID ${id} not found`);
    }
    this.posts[postIndex] = { ...this.posts[postIndex], ...updatePostDto };
    return this.posts[postIndex];
  }

  remove(id: number) {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      throw new Error(`Post with ID ${id} not found`);
    }
    this.posts.splice(postIndex, 1);
    return `This action removes a #${id} post`;
  }
}
