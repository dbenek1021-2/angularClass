import { Component, Input } from '@angular/core';
import { Video } from '../../video-data.service';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
})
export class VideoThumbnailComponent {
  @Input() video: Video | undefined;
}
