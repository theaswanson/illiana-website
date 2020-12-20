import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HistoryDayService, Video } from '../history-day.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videoId: string;

  video: Video;
  videoSafeUrl: SafeResourceUrl;
  nextVideo: Video;
  previousVideo: Video;

  constructor(
    private route: ActivatedRoute,
    private videoService: HistoryDayService,
    private sanitizer: DomSanitizer) {
    this.videoId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.video = this.videoService.getVideo(this.videoId);
    this.videoSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);

    let previousVideo = this.videoService.getPreviousVideo(this.videoId);
    this.previousVideo = previousVideo !== undefined ? previousVideo : { id: '', title: 'Back to Start' } as Video;

    let nextVideo = this.videoService.getNextVideo(this.videoId);
    this.nextVideo = nextVideo !== undefined ? nextVideo : { id: '', title: 'Back to Start' } as Video;
  }

}
