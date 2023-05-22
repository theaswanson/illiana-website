import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OfficersComponent } from './components/officers/officers.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ShowInfoComponent } from './components/show-info/show-info.component';
import { NewslettersComponent } from './components/newsletters/newsletters.component';
import { EventsComponent } from './components/events/events.component';
import { GrantInfoComponent } from './components/grant-info/grant-info.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { LinksComponent } from './components/links/links.component';
import { TrainComponent } from './components/train/train.component';
import { LadiesComponent } from './components/ladies/ladies.component';
import { LetterComponent } from './components/letter/letter.component';
import { ChristmasComponent } from './components/christmas/christmas.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HistoryDayComponent } from './components/history-day/history-day.component';
import { VideoComponent } from './components/history-day/video/video.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ImagesComponent } from './components/images/images.component';
import { LightboxModule } from 'ngx-lightbox';
import { BlogComponent } from './components/blog/blog.component';
import { FallFestivalComponent } from './components/fall-festival/fall-festival.component';
import { DonateComponent } from './components/donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { AssemblyHallComponent } from './assembly-hall/assembly-hall.component';

const ROUTES = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'show-info', component: ShowInfoComponent },
  { path: 'fall-festival', component: FallFestivalComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'newsletters', component: NewslettersComponent },
  { path: 'events', component: EventsComponent },
  { path: 'map', redirectTo: '/contact' },
  { path: 'grant-info', component: GrantInfoComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'links', component: LinksComponent },
  { path: 'train', component: TrainComponent },
  { path: 'ladies', component: LadiesComponent },
  { path: 'letter/:id', component: LetterComponent },
  { path: 'christmas', component: ChristmasComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'assembly-hall', component: AssemblyHallComponent },
  {
    path: 'history-day',
    children: [
      { path: '', component: HistoryDayComponent, pathMatch: 'full' },
      { path: ':id', component: VideoComponent },
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
] as Routes;

const ROUTER_OPTIONS = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  relativeLinkResolution: 'legacy',
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
    GrantInfoComponent,
    PicturesComponent,
    LinksComponent,
    TrainComponent,
    LadiesComponent,
    LetterComponent,
    ChristmasComponent,
    NotFoundComponent,
    HistoryDayComponent,
    VideoComponent,
    ImagesComponent,
    BlogComponent,
    FallFestivalComponent,
    DonateComponent,
    ContactComponent,
    AssemblyHallComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LightboxModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    RouterModule.forRoot(ROUTES, ROUTER_OPTIONS),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
