import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss'],
})
export class ShowInfoComponent implements OnInit {
  images: string[];
  aboutShowInfo: any[];

  constructor() {
    this.images = [
      'assets/img/show/aerial.jpg',
      'assets/img/show/aerial-sawmill.jpg',
      'assets/img/show/aerial-showgrounds-1.jpg',
      'assets/img/show/aerial-showgrounds-2.jpg',
      'assets/img/show/aerial-showgrounds-3.jpg',
      'assets/img/show/show2019.jpg',
      'assets/img/show/fountainco.jpg',
      'assets/img/show/plowing.jpg',
      'assets/img/show/1.jpg',
      'assets/img/show/2.jpg',
      'assets/img/show/3.jpg',
      'assets/img/show/4.jpg',
    ];
    this.aboutShowInfo = [
      {
        title: 'Antique Tractors',
        description: 'John Deere, Case IH, Ford, Allis Chalmers, and more!',
      },
      {
        title: 'Blacksmithing',
        description: 'Live blacksmiths working metal with anvils and forges!',
      },
      {
        title: 'Sawmill',
        description: 'Watch the crew cut logs at the old sawmill!',
      },
      {
        title: 'Flea Market',
        description:
          'A large flea market with antiques, tools, clothing, toys, and more!',
      },
      {
        title: 'Train Station',
        description:
          'Stop by one of the train stations to take a ride around the showgrounds!',
      },
      {
        title: 'Quilters',
      },
      { title: 'Steam & Gas Engines' },
      { title: 'Throttle Engines' },
      { title: 'Miniature Trains' },
      { title: 'Binding' },
      { title: 'Threshing' },
      { title: 'Plowing' },
      { title: 'Corn Shelling' },
      { title: 'Model/Scale Engines' },
      { title: 'Kids Games' },
    ];
  }

  ngOnInit(): void {}
}
