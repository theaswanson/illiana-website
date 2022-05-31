import { Component, OnInit } from '@angular/core';
import newsletters from './newsletters.json';

class Newsletter {
  month: number;
  year: number;
  ext: string;
}

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.scss']
})
export class NewslettersComponent implements OnInit {

  newsletters: Newsletter[];
  latestNewsletter: any;
  years: number[];
  colors = [
    '#66ff66',
    '#00ffff',
    '#ffff00',
    '#ff00ff',
    '#ff9933',
    '#3399ff',
    '#ff3300',
    '#ffcc00',
    '#33cc33',
    '#33cc33',
    '#cc3333'
  ];
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  newslettersByYearAndMonth = new Map<string, Newsletter>();
  colorsByYear = new Map<number, string>();

  constructor() { }

  ngOnInit(): void {
    this.newsletters = newsletters;
    this.newsletters = this.sortNewslettersByDateDescending();
    this.latestNewsletter = this.newsletters[0];
    this.years = this.getYears();
    this.populateNewslettersMap(this.years);
    this.populateColorsMap(this.years);
  }

  private sortNewslettersByDateDescending(): any[] {
    return this.newsletters.sort((a, b) => {
      if (a.year > b.year) return -1;
      if (a.year < b.year) return 1;

      if (a.month > b.month) return -1;
      if (a.month < b.month) return 1;
    });
  }

  private getYears(): number[] {
    let years = [];
    this.newsletters.forEach(n => {
      if (years.findIndex(year => year === n.year) === -1) {
        years.push(n.year);
      }
    });
    return years;
  }

  private populateNewslettersMap(years: number[]) {
    years.forEach(year => {
      for (let i = 1; i <= 12; i++) {
        this.newslettersByYearAndMonth.set(
          `${year}_${i}`,
          this.newsletters.find(newsletter => newsletter.year === year && newsletter.month === i)
        );
      }
    })
  }

  private populateColorsMap(years: number[]) {
    years.forEach(year => {
      this.colorsByYear.set(year, this.getColor(year));
    })
  }

  getColor(num: number): string {
    let colorIndex = 0;
    for (let i = 0; i < 10; i++) {
      if (num % i === 0) {
        colorIndex = i;
      }
    }
    return this.colors[colorIndex];
  }

  getMonth(row: number, column: number): number {
    return 4 * (row - 1) + column;
  }

  getNewsletter(year: number, row: number, column: number): Newsletter {
    return this.newslettersByYearAndMonth.get(year + '_' + this.getMonth(row, column));
  }

  getNewsletterHref(newsletter: Newsletter): string {
    return `assets/newsletters/Illiana-News-${this.monthNames[newsletter.month - 1]}-${newsletter.year}.${newsletter.ext}`;
  }

}
