import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})
export class ShowInfoComponent implements OnInit {

  images: string[];

  constructor() {
    this.images = [
      'assets/img/show/show2019.jpg',
      'assets/img/show/fountainco.jpg',
      'assets/img/show/plowing.jpg',
      'assets/img/show/1.jpg',
      'assets/img/show/2.jpg',
      'assets/img/show/3.jpg',
      'assets/img/show/4.jpg'
    ];
  }

  ngOnInit(): void {
  }

}
