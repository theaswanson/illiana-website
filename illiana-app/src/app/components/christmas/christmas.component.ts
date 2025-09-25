import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-christmas',
    templateUrl: './christmas.component.html',
    styleUrls: ['./christmas.component.scss'],
    standalone: false
})
export class ChristmasComponent implements OnInit {

  images: string[];

  constructor() {
    this.images = [
      'assets/img/christmas/general-store.jpg',
      'assets/img/christmas/general-store-2.jpg',
      'assets/img/christmas/village.jpg',
      'assets/img/christmas/schoolhouse.jpg',
      'assets/img/christmas/train.jpg'
    ];
  }

  ngOnInit(): void {
  }

}
