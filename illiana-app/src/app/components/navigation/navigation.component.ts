import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import routes from './routes.json';
import otherRoutes from './other-routes.json';
import eventRoutes from './event-routes.json';

class NavigationRoute {
  label: string;
  route?: string;
  fragment?: string;
  href?: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @ViewChild('nav')
  navigation: ElementRef;

  @ViewChild('toggler')
  toggler: ElementRef;

  navOpen = false;

  routes: NavigationRoute[];
  otherRoutes: NavigationRoute[];
  eventRoutes: NavigationRoute[];

  constructor(private renderer: Renderer2) {
    this.routes = routes;
    this.otherRoutes = otherRoutes;
    this.eventRoutes = eventRoutes;
  }

  ngOnInit(): void {}

  toggleNav() {
    this.navOpen = !this.navOpen;
    if (this.navOpen) {
      this.renderer.addClass(document.body, 'mobile-nav-active');
    } else {
      this.renderer.removeClass(document.body, 'mobile-nav-active');
    }
  }
}
