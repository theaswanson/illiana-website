import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { OfficersComponent } from './officers/officers.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ShowInfoComponent } from './show-info/show-info.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { EventsComponent } from './events/events.component';
import { MapComponent } from './map/map.component';

const ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'show-info', component: ShowInfoComponent },
  { path: 'newsletters', component: NewslettersComponent },
  { path: 'events', component: EventsComponent },
  { path: 'map', component: MapComponent }
] as Routes;

const ROUTER_OPTIONS = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
} as ExtraOptions;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    OfficersComponent,
    FooterComponent,
    CarouselComponent,
    ScrollToTopComponent,
    ShowInfoComponent,
    NewslettersComponent,
    EventsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, ROUTER_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
