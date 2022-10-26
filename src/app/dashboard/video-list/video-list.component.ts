import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Video } from '../video-dashboard/video-dashboard.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  @Input() videos: Video[] = [];
  @Input() selectedVideo?: Video | undefined;

  @Output() videoSelected = new EventEmitter<Video>(); // ctrl + .

  videoClicked(video: Video) {
    this.videoSelected.emit(video);
  }
}
