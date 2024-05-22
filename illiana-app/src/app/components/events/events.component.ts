import { Component, OnInit } from '@angular/core';
import events from './events.json';

interface EventJson {
  title: string;
  startDate: string;
  endDate?: string;
  location: string;
  special?: boolean;
  allDay?: boolean;
}

interface Event {
  title: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  special?: boolean;
  allDay?: boolean;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: Event[];
  eventsByYear = new Map<number, any[]>();
  dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/New_York',
  };
  timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/New_York',
  };

  constructor() {}

  ngOnInit(): void {
    this.events = this.sortEvents(this.mapEvents(events));
    const years = this.getYears(this.events);
    this.populateEventsMap(years, this.eventsByYear, this.events);
  }

  private toDateRangeString(event: Event): string {
    const startDateString = this.toDateString(event.startDate);

    return !event.endDate
      ? startDateString
      : `${startDateString} - ${this.toDateString(event.endDate)}`;
  }

  private toDateString(date: Date): string {
    return date.toLocaleString('en-US', this.dateOptions);
  }

  private toTimeString(date: Date): string {
    return date.toLocaleString('en-US', this.timeOptions);
  }

  private mapEvents(events: EventJson[]): Event[] {
    return events.map((event) => ({
      title: event.title,
      startDate: new Date(event.startDate),
      endDate: event.endDate && new Date(event.endDate),
      location: event.location,
      special: event.special,
      allDay: event.allDay,
    }));
  }

  private sortEvents(events: Event[]): Event[] {
    return events.sort((a, b) => {
      return a.startDate > b.startDate ? 1 : -1;
    });
  }

  private getYears(events: Event[]): number[] {
    let years = [];
    events.map((event) => {
      const eventYear = event.startDate.getFullYear();
      if (years.findIndex((year) => year === eventYear) === -1) {
        years.push(eventYear);
      }
    });
    return years;
  }

  private populateEventsMap(
    years: number[],
    eventsByYear: Map<number, Event[]>,
    events: Event[]
  ) {
    years.map((year) => {
      eventsByYear.set(
        year,
        events.filter((event) => event.startDate.getFullYear() === year)
      );
    });
  }
}
