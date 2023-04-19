import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ladies',
  templateUrl: './ladies.component.html',
  styleUrls: ['./ladies.component.scss'],
})
export class LadiesComponent implements OnInit {
  images: string[];

  constructor() {
    this.images = [
      'assets/img/quilters.jpg',
      'assets/img/quilters2.jpg',
      'assets/img/quilters4.jpg',
      'assets/img/sewlongago.jpg',
      'assets/img/sewlongago2.jpg',
      'assets/img/kitchen.jpg',
      'assets/img/kitchen2.jpg',
      'assets/img/kitchen3.jpg',
      'assets/img/quilters3.jpg',
    ];
  }

  ngOnInit(): void {}
}
