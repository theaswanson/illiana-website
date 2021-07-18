import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private videoService: HistoryDayService,
    private sanitizer: DomSanitizer) {
    this.videoId = this.route.snapshot.params.id;
    this.video = new Video();
    this.nextVideo = new Video();
    this.previousVideo = new Video();
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; }

    const video = this.videoService.getVideo(this.videoId);
    if (!video) {
      return;
    }
    
    this.video = video;
    this.videoSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);

    let previousVideo = this.videoService.getPreviousVideo(this.videoId);
    this.previousVideo = previousVideo !== undefined ? previousVideo : { id: '', title: 'Back to Start' } as Video;

    let nextVideo = this.videoService.getNextVideo(this.videoId);
    this.nextVideo = nextVideo !== undefined ? nextVideo : { id: '', title: 'Back to Start' } as Video;
  }

}
