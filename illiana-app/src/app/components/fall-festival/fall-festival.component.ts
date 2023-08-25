import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fall-festival',
  templateUrl: './fall-festival.component.html',
  styleUrls: ['./fall-festival.component.scss'],
})
export class FallFestivalComponent implements OnInit {
  images: string[];

  constructor() {
    this.images = [
      'assets/img/fall-festival/2022/1.jpg',
      'assets/img/fall-festival/2022/2.jpg',
      'assets/img/fall-festival/2022/3.jpg',
      'assets/img/fall-festival/2022/4.jpg',
      'assets/img/fall-festival/2022/5.jpg',
      'assets/img/fall-festival/2022/6.jpg',
      'assets/img/fall-festival/2022/7.jpg',
      'assets/img/fall-festival/2022/8.jpg',
      'assets/img/fall-festival/2022/9.jpg',
      'assets/img/intro-carousel/crowd.jpg',
      'assets/img/fall-festival/blacksmithing.jpg',
      'assets/img/fall-festival/clothes.jpg',
      'assets/img/fall-festival/jars.jpg',
      'assets/img/fall-festival/quilt.jpg',
      'assets/img/fall-festival/trains.jpg',
      'assets/img/fall-festival/1.jpg',
      'assets/img/fall-festival/2.jpg',
      'assets/img/fall-festival/3.jpg',
      'assets/img/fall-festival/4.jpg',
    ];
  }

  ngOnInit(): void {}
}
