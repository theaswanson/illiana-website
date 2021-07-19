import { Injectable } from '@angular/core';

export class Post {
  filePath: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): Post[] {
    return [
      { filePath: '/assets/letters/2021-7-fall-festival.md', date: new Date(2021, 7, 19) } as Post,
      { filePath: '/assets/letters/2021-6-exhibitors-and-fees.md', date: new Date(2021, 6, 7) } as Post,
      { filePath: '/assets/letters/2021-6-show-invitation.md', date: new Date(2021, 6, 25, 15, 0, 0) } as Post,
      { filePath: '/assets/letters/2021-6-thank-you-volunteers.md', date: new Date(2021, 6, 25, 16, 0, 0) } as Post,
      { filePath: '/assets/letters/2020-9-club-update.md', date: new Date(2020, 7, 1, 12, 0, 0) } as Post,
    ]
    .sort((a, b) => a.date < b.date ? 1 : -1);
  }
}
