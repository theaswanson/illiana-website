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

  public slides = [
    {
      src: "../../assets/img/rake.jpg",
      header: "Showgrounds Clean-Up Day",
      body: 'Saturday, December 5 @ 1:00 PM. Bring your rakes and leaf blowers to help clean up the grounds.',
      link: { href: "/events", text: "View Events" }
    },
    {
      src: "../../assets/img/intro-carousel/tom.jpg",
      header: "A Message from the President",
      link: { href: "/letter-september2020", text: "Read Now" }
    },
    {
      src: "../../assets/img/history-day.jpg",
      header: "History Day is Going Virtual!",
      body: "This year, we're making History Day into an entirely virtual event where all activities will be done online! More details to come."
    },
    {
      src: "../../assets/img/show/1.jpg",
      header: "Annual Show: Cancelled",
      link: { href: "/show-info", text: "View Details" }
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
  autoscrollDelay = 5000;

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
      setTimeout(() => { this.skipThisCycle = false}, 1000);
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
