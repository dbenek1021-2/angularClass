import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Video, VideoDataService } from '../../video-data.service';

const apiUrl = 'https://api.angularbootcamp.com/videos';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent {
  videoList: Observable<Video[]>;
  selectedVideoId: Observable<string | null>;

  constructor(vds: VideoDataService, route: ActivatedRoute) {
    this.videoList = vds.loadVideos();
    this.selectedVideoId = route.queryParamMap.pipe(
      map((paramMap) => paramMap.get('videoId'))
    );
  }
}
