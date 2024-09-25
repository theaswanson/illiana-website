import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  aboutUsInfo = [
    {
      link: '/events',
      img: 'assets/img/calendar.jpg',
      icon: 'ion-calendar',
      title: 'Event Calendar',
      description: 'Click here to view all of our planned events for the year.',
    },
    {
      link: '/contact',
      img: 'assets/img/map.jpg',
      icon: 'ion-map',
      title: 'Map',
      description:
        'Click here for directions to the Illiana Antique Power Association showgrounds.',
    },
    {
      link: '/grant-info',
      img: 'assets/img/grant.jpg',
      icon: 'ion-cash',
      title: 'Grant Information',
      description:
        'Click here for more information about our projects that have been funded by grants from our community.',
    },
  ];

  eventInfo = [
    {
      link: '/show-info',
      img: 'assets/img/about-mission.jpg',
      title: 'Annual Power Show',
      description:
        'The Power Show is held every year during the 3rd weekend of July.',
    },
    {
      link: '/fall-festival',
      img: 'assets/img/fall-festival/crafts.jpg',
      title: 'Fall Festival',
      description:
        "Vendors of arts, crafts, antiques, furniture, and more, with children's activities, painting classes, and decor workshops!",
    },
    {
      link: '/history-day',
      img: 'assets/img/history-day/2022/blacksmithing-2.jpg',
      title: 'History Day',
      description:
        'A living history presentation for students to learn and get hands-on experience.',
    },
    {
      link: '/christmas',
      img: 'assets/img/christmas/tractor.jpg',
      title: 'Christmas in the Village',
      description:
        'Bring your family and enjoy an old fashioned Christmas celebration. Remember the way Christmas was "way back when". Make Christmas in the Village a family tradition.',
    },
  ];

  aboutShowInfo = [
    {
      title: 'Antique Tractors',
      description: 'John Deere, Case IH, Ford, Allis Chalmers, and more!',
    },
    {
      title: 'Blacksmithing',
      description: 'Live blacksmiths working metal with anvils and forges!',
    },
    { title: 'Threshing', description: 'Live threshing demonstrations!' },
    {
      title: 'Sawmill',
      description: 'Watch the crew cut logs using the old sawmill!',
    },
    {
      title: 'Quilting',
      description:
        'Watch the Illiana Quilters create works of art, including quilts, home items, and more!',
    },
    {
      title: 'Flea Market',
      description:
        "A large flea market with antiques, tools, clothing, toys...they've got everything, really!",
    },
    {
      title: 'Learn about the Pine Creek and Western Railroad',
      description:
        'Stop by one of the train stations on the grounds to see how a railroad is run!',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
