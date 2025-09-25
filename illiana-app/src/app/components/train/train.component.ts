import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-train',
    templateUrl: './train.component.html',
    styleUrls: ['./train.component.scss'],
    standalone: false
})
export class TrainComponent implements OnInit {

  images: string[];
  
  constructor() {
    this.images = [
      'assets/img/railroad1.jpg',
      'assets/img/railroad2.png',
      'assets/img/railroad3.jpg',
      'assets/img/railroad4.jpg'
    ]
  }

  ngOnInit(): void {
  }

}
