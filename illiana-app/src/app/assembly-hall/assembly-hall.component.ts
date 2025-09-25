import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-assembly-hall',
    templateUrl: './assembly-hall.component.html',
    styleUrls: ['./assembly-hall.component.scss'],
    standalone: false
})
export class AssemblyHallComponent implements OnInit {
  images = [
    '/assets/img/assembly-hall/1.jpg',
    '/assets/img/assembly-hall/2.jpg',
    '/assets/img/assembly-hall/3.jpg',
    '/assets/img/assembly-hall/4.jpg',
    '/assets/img/assembly-hall/5.jpg',
    '/assets/img/assembly-hall/6.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
