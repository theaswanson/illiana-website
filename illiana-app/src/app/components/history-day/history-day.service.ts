import { Injectable } from '@angular/core';

export class Video {
  id: string;
  title: string;
  url: string;
  presenters: string;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryDayService {

  videos: Video[] = [
    { id: 'post-office', title: 'The Post Office', url: 'https://www.youtube.com/embed/L_C8svTrSv0', presenters: 'Tom Swanson' } as Video,
    { id: 'quilting-and-spinning', title: 'Quilting and Spinning', url: 'https://www.youtube.com/embed/VRpBhD7aWnU', presenters: 'Kathy Kyle, Becky McCormick, Rita Stringer, Kathy Olin and Liam Beheler' } as Video,
    { id: 'sawmill', title: 'The Sawmill', url: 'https://www.youtube.com/embed/tzZje4Zn8DY', presenters: 'Owen Moudy and Guy' } as Video,
    { id: 'printing-press', title: 'The Printing Press', url: 'https://www.youtube.com/embed/3CDQgSrFETc', presenters: 'Cecil Krebs' } as Video,
    { id: 'log-cabin', title: 'The Log Cabin', url: 'https://www.youtube.com/embed/aghGYrg_uqU', presenters: 'Tom Swanson' } as Video,
    { id: 'blacksmithing', title: 'Blacksmithing', url: 'https://www.youtube.com/embed/Gpjxf04dJfc', presenters: 'Dominick Andrisani' } as Video,
    { id: 'making-butter', title: 'Making Butter', url: 'https://www.youtube.com/embed/ipT9AEgiR10', presenters: 'Peggy Brenner and Phoebe Beheler' } as Video,
    { id: 'making-corn-bread', title: 'Making Cornbread', url: 'https://www.youtube.com/embed/CoNXkb6XHNo', presenters: 'Joan Fry' } as Video,
    { id: 'shelling-corn', title: 'Shelling Corn', url: 'https://www.youtube.com/embed/KU9tcpd1fVc', presenters: 'Joe Fry' } as Video,
    { id: 'washing-clothes', title: 'Washing Clothes', url: 'https://www.youtube.com/embed/K2szSONV6kc', presenters: 'Kenny Short' } as Video,
    { id: 'model-t', title: 'Model T Ford Car', url: 'https://www.youtube.com/embed/zhbSMc0cB2o', presenters: 'Doc Fontaine and Dennis' } as Video,
    { id: 'plows-and-planters', title: 'Plows and Planters', url: 'https://www.youtube.com/embed/oqJ5HugH75g', presenters: 'Tom Swanson' } as Video,
  ];
  
  constructor() { }

  getVideos(): Video[] {
    return this.videos;
  }

  getVideo(id: string): Video {
    return this.videos.find(video => video.id === id);
  }

  getPreviousVideo(id: string): Video {
    let index = this.videos.findIndex(video => video.id === id);
    if (index === -1 || index === 0) {
      return undefined;
    }
    return this.videos[index - 1];
  }

  getNextVideo(id: string): Video {
    let index = this.videos.findIndex(video => video.id === id);
    if (index === -1 || index === this.videos.length) {
      return undefined;
    }
    return this.videos[index + 1];
  }
}
