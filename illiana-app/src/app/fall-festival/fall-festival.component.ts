import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fall-festival',
  templateUrl: './fall-festival.component.html',
  styleUrls: ['./fall-festival.component.scss']
})
export class FallFestivalComponent implements OnInit {

  images: string[];

  constructor() {
    this.images = [
      'assets/img/intro-carousel/crowd.jpg',
      'assets/img/fall-festival/blacksmithing.jpg',
      'assets/img/fall-festival/clothes.jpg',
      'assets/img/fall-festival/jars.jpg',
      'assets/img/fall-festival/quilt.jpg',
      'assets/img/fall-festival/trains.jpg',
    ]
  }

  ngOnInit(): void {
  }

}
