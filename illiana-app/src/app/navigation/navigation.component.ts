import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('nav')
  navigation: ElementRef;

  @ViewChild('toggler')
  toggler: ElementRef;

  navOpen = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    if (this.navOpen) {
      this.renderer.addClass(document.body, 'mobile-nav-active');
    } else {
      this.renderer.removeClass(document.body, 'mobile-nav-active');
    }
    console.log(this.navOpen);
  }

  collapse(event: any) {
    console.log(event);
  }

}
