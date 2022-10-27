import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Video, VideoDataService } from '../../video-data.service';

const apiUrl = 'https://api.angularbootcamp.com/videos';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
  
})
export class VideoDashboardComponent {
  videoList: Observable<Video[]>;
  currentVideo: Video | null = null;

  constructor(svc: VideoDataService) {
    this.videoList = svc.loadVideos();
  }

  selectVideo(video: Video) {
    if (this.currentVideo?.id === video.id) {
      this.currentVideo = null;
    } else {
      this.currentVideo = video;
    }
  }
}
