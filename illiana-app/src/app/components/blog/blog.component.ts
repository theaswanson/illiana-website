import { Component, OnInit } from '@angular/core';
import { Post, PostsService } from '../../services/posts/posts.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    standalone: false
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }

}
