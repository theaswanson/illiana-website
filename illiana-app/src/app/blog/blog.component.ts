import { Component, OnInit } from '@angular/core';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }

}
