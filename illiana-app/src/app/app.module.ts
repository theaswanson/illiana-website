import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
import { GrantInfoComponent } from './grant-info/grant-info.component';
import { PicturesComponent } from './pictures/pictures.component';
import { LinksComponent } from './links/links.component';
import { TrainComponent } from './train/train.component';
import { LadiesComponent } from './ladies/ladies.component';
import { LetterSeptember2020Component } from './letter-september2020/letter-september2020.component';
import { ChristmasComponent } from './christmas/christmas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HistoryDayComponent } from './history-day/history-day.component';
import { PostOfficeComponent } from './history-day/post-office/post-office.component';
import { QuiltingAndSpinningComponent } from './history-day/quilting-and-spinning/quilting-and-spinning.component';
import { SawmillComponent } from './history-day/sawmill/sawmill.component';
import { PrintingPressComponent } from './history-day/printing-press/printing-press.component';
import { LogCabinComponent } from './history-day/log-cabin/log-cabin.component';
import { BlacksmithingComponent } from './history-day/blacksmithing/blacksmithing.component';
import { MakingButterComponent } from './history-day/making-butter/making-butter.component';
import { MakingCornBreadComponent } from './history-day/making-corn-bread/making-corn-bread.component';

const ROUTES = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'show-info', component: ShowInfoComponent },
  { path: 'newsletters', component: NewslettersComponent },
  { path: 'events', component: EventsComponent },
  { path: 'map', component: MapComponent },
  { path: 'grant-info', component: GrantInfoComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'links', component: LinksComponent },
  { path: 'train', component: TrainComponent },
  { path: 'ladies', component: LadiesComponent },
  { path: 'letter-september2020', component: LetterSeptember2020Component },
  { path: 'christmas-in-the-village', component: ChristmasComponent },
  {
    path: 'history-day', children: [
      { path: '', component: HistoryDayComponent, pathMatch: 'full' },
      { path: 'post-office', component: PostOfficeComponent },
      { path: 'quilting-and-spinning', component: QuiltingAndSpinningComponent },
      { path: 'sawmill', component: SawmillComponent },
      { path: 'printing-press', component: PrintingPressComponent },
      { path: 'log-cabin', component: LogCabinComponent },
      { path: 'blacksmithing', component: BlacksmithingComponent },
      { path: 'making-butter', component: MakingButterComponent },
      { path: 'making-corn-bread', component: MakingCornBreadComponent },
    ]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
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
    MapComponent,
    GrantInfoComponent,
    PicturesComponent,
    LinksComponent,
    TrainComponent,
    LadiesComponent,
    LetterSeptember2020Component,
    ChristmasComponent,
    NotFoundComponent,
    HistoryDayComponent,
    PostOfficeComponent,
    QuiltingAndSpinningComponent,
    SawmillComponent,
    PrintingPressComponent,
    LogCabinComponent,
    BlacksmithingComponent,
    MakingButterComponent,
    MakingCornBreadComponent
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
