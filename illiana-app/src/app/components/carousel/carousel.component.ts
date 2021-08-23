import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeIn, fadeOut } from './carousel.animations';
import slides from './slides.json';

class Slide {
  src: string;
  header: string;
  body: string;
  link: Link;
}

class Link {
  href: string;
  text: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, { params: { time: '500ms' } })]),
      transition("* => void", [useAnimation(fadeOut, { params: { time: '500ms' } })]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  slides: Slide[];
  currentSlide = 0;
  skipThisCycle = true;
  autoscrollDelay = 10000;

  constructor() {
    this.slides = slides;
  }

  ngOnInit(): void {
    this.preloadImages();
    this.autoScroll();
  }

  onPreviousClick() {
    this.skipThisCycle = true;
    this.previousSlide();
  }

  onNextClick() {
    this.skipThisCycle = true;
    this.nextSlide();
  }

  private preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

  private autoScroll() {
    if (!this.skipThisCycle) {
      this.nextSlide();
    } else {
      setTimeout(() => { this.skipThisCycle = false }, 1000);
    }
    setTimeout(() => { this.autoScroll() }, this.autoscrollDelay);
  }

  private previousSlide() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  private nextSlide() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

}
