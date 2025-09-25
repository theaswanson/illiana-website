import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-letter',
    templateUrl: './letter.component.html',
    styleUrls: ['./letter.component.scss'],
    standalone: false
})
export class LetterComponent implements OnInit {

  letterId: string;
  filePath: string;

  constructor(private route: ActivatedRoute) {
    this.letterId = this.route.snapshot.params.id;
    this.filePath = `/assets/letters/${this.letterId}.md`;
  }

  ngOnInit(): void {
  }

}
