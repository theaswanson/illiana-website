import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss'],
  standalone: false,
})
export class ShowInfoComponent implements OnInit {
  headerImages: string[];
  images: string[];
  aboutShowInfo: any[];

  constructor() {
    this.headerImages = [
      'assets/img/show/show2019.jpg',
      'assets/img/show/aerial.jpg',
      'assets/img/show/1.jpg',
      'assets/img/show/aerial-showgrounds-1.jpg',
      'assets/img/show/plowing.jpg',
      'assets/img/show/4.jpg',
    ];

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
        title: 'Tractor Parade',
        description: 'Runs daily @ 2pm',
      },
      {
        title: 'Blacksmithing',
        description: 'Live blacksmiths working metal with anvils and forges!',
      },
      {
        title: 'Sawmill',
        description:
          'Watch the crew cut logs at the old sawmill! Runs at 9am & 11am daily.',
      },
      {
        title: 'Learn about the Pine Creek and Western Railroad',
        description:
          'Stop by one of the train stations on the grounds to see how a railroad is run!',
      },
      {
        title: 'Flea Market & Craft Booths',
        description:
          'A large flea market with antiques, crafts, tools, clothing, toys, and more!',
      },
      {
        title: 'Quilters',
        description: '"Make it and take it" project!',
      },
      {
        title: "Kathy's Kitchen",
        description:
          'Learn about cooking, baking, and using herbs and natural plants with Deb Dye throughout the weekend.',
      },
      {
        title: 'Canvas Painting',
        description: 'Saturday @ 3pm ($25 per person, includes all materials)',
      },
      {
        title: 'Homemade Pies for Sale',
        description: 'Sold daily in the Assembly Hall.',
      },
      {
        title: 'Food Vendors',
        description:
          'A variety of food options will be available from our five vendors on the grounds.',
      },
      {
        title: 'Indiana Fairs and Festival Bus',
        description: 'Friday only!',
      },
      { title: 'Steam & Gas Engines' },
      { title: 'Throttle Engines' },
      { title: 'Miniature Trains' },
      { title: 'Binding' },
      {
        title: 'LakeLand Jr. College Driving Simulator',
        description: 'Open Friday and Saturday',
      },
      {
        title: 'Threshing',
        description: 'Live threshing demonstrations! Runs at 10am & 3pm daily.',
      },
      { title: 'Plowing' },
      { title: 'Corn Shelling' },
      { title: 'Model/Scale Engines' },
      {
        title: 'Kids Games',
        description:
          'Tons of activities will be available for kids, including a corn pit w/ toys, a picture area w/ cutout, sack races, and corn husking races!',
      },
      {
        title: 'Kiddie Tractor Pull',
        description: 'Saturday @ 11am in front of the Assembly Hall',
      },
    ];
  }

  ngOnInit(): void {}
}
