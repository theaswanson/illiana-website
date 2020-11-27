import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.scss']
})
export class NewslettersComponent implements OnInit {

  newsletters = [
    { month: 3, year: 2020, ext: 'pdf' },
    { month: 5, year: 2020, ext: 'pdf' },
    { month: 6, year: 2020, ext: 'pdf' },
    { month: 7, year: 2020, ext: 'pdf' },
    { month: 8, year: 2020, ext: 'pdf' },
    { month: 9, year: 2020, ext: 'pdf' },
    { month: 11, year: 2020, ext: 'pdf' },
    { month: 1, year: 2019, ext: 'pdf' },
    { month: 2, year: 2019, ext: 'pdf' },
    { month: 3, year: 2019, ext: 'pdf' },
    { month: 4, year: 2019, ext: 'pdf' },
    { month: 5, year: 2019, ext: 'pdf' },
    { month: 6, year: 2019, ext: 'pdf' },
    { month: 7, year: 2019, ext: 'pdf' },
    { month: 8, year: 2019, ext: 'pdf' },
    { month: 9, year: 2019, ext: 'pdf' },
    { month: 10, year: 2019, ext: 'pdf' },
    { month: 11, year: 2019, ext: 'pdf' },
    { month: 12, year: 2019, ext: 'pdf' },
    { month: 3, year: 2018, ext: 'docx' },
    { month: 4, year: 2018, ext: 'pdf' },
    { month: 5, year: 2018, ext: 'docx' },
    { month: 6, year: 2018, ext: 'docx' },
    { month: 7, year: 2018, ext: 'pdf' },
    { month: 8, year: 2018, ext: 'pdf' },
    { month: 9, year: 2018, ext: 'pdf' },
    { month: 10, year: 2018, ext: 'pdf' },
    { month: 11, year: 2018, ext: 'pdf' },
    { month: 1, year: 2017, ext: 'docx' },
    { month: 2, year: 2017, ext: 'pdf' },
    { month: 3, year: 2017, ext: 'pdf' },
    { month: 4, year: 2017, ext: 'pdf' },
    { month: 5, year: 2017, ext: 'docx' },
    { month: 6, year: 2017, ext: 'pdf' },
    { month: 7, year: 2017, ext: 'pdf' },
    { month: 8, year: 2017, ext: 'pdf' },
    { month: 9, year: 2017, ext: 'pdf' },
    { month: 10, year: 2017, ext: 'docx' },
    { month: 11, year: 2017, ext: 'docx' },
    { month: 1, year: 2016, ext: 'jpg' },
    { month: 2, year: 2016, ext: 'docx' },
    { month: 3, year: 2016, ext: 'pdf' },
    { month: 4, year: 2016, ext: 'pdf' },
    { month: 5, year: 2016, ext: 'pdf' },
    { month: 6, year: 2016, ext: 'docx' },
    { month: 7, year: 2016, ext: 'docx' },
    { month: 8, year: 2016, ext: 'pdf' },
    { month: 9, year: 2016, ext: 'docx' },
    { month: 11, year: 2016, ext: 'pdf' },
    { month: 2, year: 2015, ext: 'htm' },
    { month: 3, year: 2015, ext: 'htm' },
    { month: 4, year: 2015, ext: 'pdf' },
    { month: 5, year: 2015, ext: 'pdf' },
    { month: 6, year: 2015, ext: 'pdf' },
    { month: 7, year: 2015, ext: 'pdf' },
    { month: 8, year: 2015, ext: 'pdf' },
    { month: 9, year: 2015, ext: 'JPG' },
    { month: 10, year: 2015, ext: 'pdf' },
    { month: 11, year: 2015, ext: 'pdf' },
    { month: 1, year: 2014, ext: 'htm' },
    { month: 2, year: 2014, ext: 'htm' },
    { month: 3, year: 2014, ext: 'htm' },
    { month: 4, year: 2014, ext: 'pdf' },
    { month: 5, year: 2014, ext: 'htm' },
    { month: 6, year: 2014, ext: 'htm' },
    { month: 8, year: 2014, ext: 'pdf' },
    { month: 9, year: 2014, ext: 'pdf' },
    { month: 10, year: 2014, ext: 'pdf' },
    { month: 11, year: 2014, ext: 'pdf' },
    { month: 3, year: 2013, ext: 'htm' },
    { month: 4, year: 2013, ext: 'pdf' },
    { month: 5, year: 2013, ext: 'pdf' },
    { month: 6, year: 2013, ext: 'htm' },
    { month: 7, year: 2013, ext: 'pdf' },
    { month: 8, year: 2013, ext: 'pdf' },
    { month: 9, year: 2013, ext: 'pdf' },
    { month: 10, year: 2013, ext: 'pdf' },
    { month: 11, year: 2013, ext: 'htm' },
    { month: 3, year: 2012, ext: 'htm' },
    { month: 4, year: 2012, ext: 'htm' },
    { month: 5, year: 2012, ext: 'htm' },
    { month: 6, year: 2012, ext: 'htm' },
    { month: 7, year: 2012, ext: 'htm' },
    { month: 8, year: 2012, ext: 'htm' },
    { month: 9, year: 2012, ext: 'htm' },
    { month: 10, year: 2012, ext: 'pdf' },
    { month: 11, year: 2012, ext: 'htm' },
    { month: 12, year: 2012, ext: 'jpg' },
    { month: 3, year: 2011, ext: 'htm' },
    { month: 4, year: 2011, ext: 'htm' },
    { month: 5, year: 2011, ext: 'htm' },
    { month: 6, year: 2011, ext: 'htm' },
    { month: 7, year: 2011, ext: 'htm' },
    { month: 8, year: 2011, ext: 'htm' },
    { month: 9, year: 2011, ext: 'htm' },
    { month: 10, year: 2011, ext: 'htm' },
    { month: 12, year: 2011, ext: 'htm' },
    { month: 1, year: 2010, ext: 'htm' },
    { month: 3, year: 2010, ext: 'htm' },
    { month: 4, year: 2010, ext: 'htm' },
    { month: 5, year: 2010, ext: 'htm' },
    { month: 6, year: 2010, ext: 'htm' },
    { month: 7, year: 2010, ext: 'htm' },
    { month: 8, year: 2010, ext: 'htm' },
    { month: 9, year: 2010, ext: 'htm' },
    { month: 10, year: 2010, ext: 'htm' },
    { month: 11, year: 2010, ext: 'htm' },
    { month: 1, year: 2009, ext: 'htm' },
    { month: 2, year: 2009, ext: 'htm' },
    { month: 3, year: 2009, ext: 'htm' },
    { month: 4, year: 2009, ext: 'htm' },
    { month: 5, year: 2009, ext: 'htm' },
    { month: 6, year: 2009, ext: 'htm' },
    { month: 7, year: 2009, ext: 'htm' },
    { month: 8, year: 2009, ext: 'htm' },
    { month: 9, year: 2009, ext: 'htm' },
    { month: 10, year: 2009, ext: 'htm' },
    { month: 11, year: 2009, ext: 'htm' },
    { month: 1, year: 2008, ext: 'htm' },
    { month: 2, year: 2008, ext: 'htm' },
    { month: 3, year: 2008, ext: 'htm' },
    { month: 4, year: 2008, ext: 'htm' },
    { month: 5, year: 2008, ext: 'htm' },
    { month: 6, year: 2008, ext: 'htm' },
    { month: 7, year: 2008, ext: 'htm' },
    { month: 8, year: 2008, ext: 'htm' },
    { month: 9, year: 2008, ext: 'htm' },
    { month: 10, year: 2008, ext: 'htm' },
    { month: 11, year: 2008, ext: 'htm' },
    { month: 1, year: 2007, ext: 'htm' },
    { month: 2, year: 2007, ext: 'htm' },
    { month: 3, year: 2007, ext: 'htm' },
    { month: 4, year: 2007, ext: 'htm' },
    { month: 5, year: 2007, ext: 'htm' },
    { month: 6, year: 2007, ext: 'htm' },
    { month: 7, year: 2007, ext: 'htm' },
    { month: 8, year: 2007, ext: 'htm' },
    { month: 9, year: 2007, ext: 'htm' },
    { month: 10, year: 2007, ext: 'htm' },
    { month: 11, year: 2007, ext: 'htm' },
    { month: 2, year: 2006, ext: 'htm' },
    { month: 3, year: 2006, ext: 'htm' },
    { month: 4, year: 2006, ext: 'htm' },
    { month: 5, year: 2006, ext: 'htm' },
    { month: 6, year: 2006, ext: 'htm' },
    { month: 7, year: 2006, ext: 'htm' },
    { month: 8, year: 2006, ext: 'htm' },
    { month: 9, year: 2006, ext: 'htm' },
    { month: 10, year: 2006, ext: 'htm' },
    { month: 11, year: 2006, ext: 'htm' },
    { month: 12, year: 2006, ext: 'htm' },
    { month: 2, year: 2005, ext: 'pdf' },
    { month: 3, year: 2005, ext: 'htm' },
    { month: 4, year: 2005, ext: 'htm' },
    { month: 5, year: 2005, ext: 'htm' },
    { month: 6, year: 2005, ext: 'htm' },
    { month: 7, year: 2005, ext: 'htm' },
    { month: 8, year: 2005, ext: 'htm' },
    { month: 9, year: 2005, ext: 'htm' },
    { month: 10, year: 2005, ext: 'htm' },
    { month: 11, year: 2005, ext: 'htm' },
    { month: 1, year: 2004, ext: 'pdf' },
    { month: 9, year: 2004, ext: 'htm' },
    { month: 11, year: 2004, ext: 'html' }
  ];
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
  months = [
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
  newslettersMap = new Map<string, any>();
  colorsMap = new Map<number, string>();

  constructor() { }

  ngOnInit(): void {
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
    this.newsletters.map(x => {
      if (years.findIndex(year => year === x.year) === -1) {
        years.push(x.year);
      }
    });
    return years;
  }

  private populateNewslettersMap(years: number[]) {
    years.map(year => {
      for (let i = 1; i <= 12; i++) {
        this.newslettersMap.set(
          `${year}_${i}`,
          this.newsletters.find(newsletter => newsletter.year === year && newsletter.month === i)
        );
      }
    })
  }

  private populateColorsMap(years: number[]) {
    years.map(year => {
      this.colorsMap.set(year, this.getColor(year));
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

}
