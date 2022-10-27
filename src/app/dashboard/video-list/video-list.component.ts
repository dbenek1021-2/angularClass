import { Component, Input } from '@angular/core';

import { Video } from '../../video-data.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  @Input() videos: Video[] = [];
  @Input() selectedVideoId: string | null = null;
}