import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events = [
    { year: 2020, title: 'Clean-up Day', date: 'December 5', time: '1:00 PM', location: 'Showgrounds' },
    { year: 2020, title: 'History Day', date: 'TBD', time: '', location: 'Online' },
  ];
  years: number[];
  eventsMap = new Map<number, any[]>();

  constructor() { }

  ngOnInit(): void {
    this.events = this.sortEvents(this.events);
    this.years = this.getYears(this.events);
    this.populateEventsMap(this.years, this.eventsMap, this.events);
  }

  private sortEvents(events: any[]): any[] {
    return events.sort((a, b) => {
      if (a.year > b.year) return -1;
      if (a.year < b.year) return 1;
    });
  }

  private getYears(events: any[]): number[] {
    let years = [];
    events.map(x => {
      if (years.findIndex(year => year === x.year) === -1) {
        years.push(x.year);
      }
    });
    return years;
  }

  private populateEventsMap(years: number[], eventsMap: Map<number, any[]>, events: any[]) {
    years.map(year => {
      eventsMap.set(
        year,
        events.filter(event => event.year === year)
      );
    })
  }
}
