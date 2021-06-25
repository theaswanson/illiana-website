import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeIn, fadeOut } from './carousel.animations';

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

  slides = [
    {
      src: "../../assets/img/intro-carousel/plowing.jpg",
      header: "Annual Show: July 16-18",
      body: "We are excited to host our 39th annual Antique Power Exhibition this year, featuring J.I. Case Tractors and Ohio MFG. engines! Click the button below to find out more.",
      link: { href: "/show-info", text: "View Details" }
    },
    {
      src: "../../assets/img/intro-carousel/tom.jpg",
      header: "Letter from the President",
      link: { href: "/letter/may-2021", text: "Read Now" }
    },
    {
      src: "../../assets/img/history-day-2.jpg",
      header: "Virtual History Day is Now Live!",
      body: "Step back in time and learn about life during the early rural days. Learn about the post office, sawmill, printing press, and more in our interactive tour or on our YouTube channel.",
      link: { href: "/history-day", text: "Watch Now" }
    },
    {
      src: "../../assets/img/intro-carousel/1.jpg",
      header: "Where the Past has a Future!",
      body: "The Illiana Antique Power Association is a non-profit organization dedicated to the preservation of our early rural way of life and the mechanical marvels that changed farming forever.",
      link: { href: "/", fragment: "about", text: "Learn More" }
    }
  ]
  currentSlide = 0;
  skipThisCycle = true;
  autoscrollDelay = 10000;

  constructor() { }

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
