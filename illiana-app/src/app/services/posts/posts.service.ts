import { Injectable } from '@angular/core';
import posts from './posts.json';

export class Post {
  filePath: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[];

  constructor() {
    this.posts = this.readPosts();
  }

  readPosts(): Post[] {
    return posts.map((p) => {
      return { filePath: p.filePath, date: new Date(p.date) } as Post
    });
  }

  getPosts(): Post[] {
    return this.posts.sort((a, b) => a.date < b.date ? 1 : -1);
  }
}
