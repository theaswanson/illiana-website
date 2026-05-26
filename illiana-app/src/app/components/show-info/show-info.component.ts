import { Component, OnInit } from '@angular/core';

type ShowInfoItem = {
  title: string;
  description?: string;
  imgUrl?: string;
};

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss'],
  standalone: false,
})
export class ShowInfoComponent implements OnInit {
  headerImages: string[];
  images: string[];
  aboutShowInfo: ShowInfoItem[];

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
        imgUrl: 'assets/img/show/1.jpg',
      },
      {
        title: 'Tractor Parade',
        description: 'Runs daily @ 2pm',
        imgUrl: 'assets/img/show/show2019.jpg',
      },
      {
        title: 'Blacksmithing',
        description: 'Live blacksmiths working metal with anvils and forges!',
        imgUrl: 'assets/img/history-day/2022/blacksmithing-2.jpg',
      },
      {
        title: 'Sawmill',
        description:
          'Watch the crew cut logs at the old sawmill! Runs at 9am & 11am daily.',
        imgUrl: 'assets/img/history-day/sawmill.jpg',
      },
      {
        title: 'Learn about the Pine Creek and Western Railroad',
        description:
          'Stop by one of the train stations on the grounds to see how a railroad is run!',
        imgUrl: 'assets/img/railroad3.jpg',
      },
      {
        title: 'Flea Market & Craft Booths',
        description:
          'A large flea market with antiques, crafts, tools, clothing, toys, and more!',
        imgUrl: 'assets/img/fall-festival/crafts.jpg',
      },
      {
        title: 'Quilters',
        description: '"Make it and take it" project!',
        imgUrl: 'assets/img/history-day/2022/quilt.jpg',
      },
      {
        title: "Kathy's Kitchen",
        description:
          'Learn about cooking, baking, and using herbs and natural plants with Deb Dye throughout the weekend.',
        imgUrl: 'assets/img/history-day/making-corn-bread.jpg',
      },
      {
        title: 'Canvas Painting',
        description: 'Saturday @ 3pm ($25 per person, includes all materials)',
      },
      {
        title: 'Homemade Pies for Sale',
        description: 'Sold daily in the Assembly Hall.',
        imgUrl: 'assets/img/assembly-hall/6.jpg',
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
      {
        title: 'Steam, Gas, and Throttle Engines',
        imgUrl: 'assets/img/show/gas-engines.jpg',
      },
      { title: 'Miniature Trains', imgUrl: 'assets/img/railroad4.jpg' },
      { title: 'Binding' },
      {
        title: 'LakeLand Jr. College Driving Simulator',
        description: 'Open Friday and Saturday',
      },
      {
        title: 'Threshing',
        description: 'Live threshing demonstrations! Runs at 10am & 3pm daily.',
        imgUrl: 'assets/img/show/threshing.jpg',
      },
      { title: 'Plowing', imgUrl: 'assets/img/show/plowing.jpg' },
      {
        title: 'Corn Shelling',
        imgUrl: 'assets/img/history-day/shelling-corn.jpg',
      },
      { title: 'Model/Scale Engines' },
      {
        title: 'Kids Games',
        description:
          'Tons of activities will be available for kids, including a corn pit w/ toys, a picture area w/ cutout, sack races, and corn husking races!',
      },
      {
        title: 'Kiddie Tractor Pull',
        description: 'Saturday @ 11am in front of the Assembly Hall',
        imgUrl: 'assets/img/show/kiddie-tractor-pull.jpg',
      },
    ];
  }

  ngOnInit(): void {}
}
