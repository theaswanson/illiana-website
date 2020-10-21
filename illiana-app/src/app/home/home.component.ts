import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  aboutUsInfo = [
    { link: '/show-info', img: 'assets/img/about-mission.jpg', icon: 'ion-ios-information-outline', title: 'Show Information', description: 'Click here to view more information about this year\s Power Show. The Power Show is held every year during the 3rd weekend of July.' },
    { link: '/newsletters', img: 'assets/img/about-plan.jpg', icon: 'ion-ios-list-outline', title: 'Newsletters', description: 'Click here to view our monthly newsletters.' },
    { link: '/map', img: 'assets/img/about-vision.jpg', icon: 'ion-map', title: 'Map', description: 'Click here for directions to the Illiana Antique Power Association showgrounds.' },
    { link: '/grant-info', img: 'assets/img/grant.jpg', icon: 'ion-cash', title: 'Grant Information', description: 'Click here for more information about our projects that have been funded by grants from our community.' },
  ]

  aboutShowInfo = [
    { title: 'Antique Tractors', description: 'John Deere, Case IH, Ford, Allis Chalmers, and more!' },
    { title: 'Blacksmithing', description: 'Live blacksmiths working metal with anvils and forges!' },
    { title: 'Threshing', description: 'Live threshing demonstrations!' },
    { title: 'Sawmill', description: 'Watch the crew cut logs using the old sawmill!' },
    { title: 'Flea Market', description: 'A large flea market with antiques, tools, clothing, toys...they\'ve got everything, really!' },
    { title: 'Train Station', description: 'Stop by one of the train stations to take a ride around the showgrounds!' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
