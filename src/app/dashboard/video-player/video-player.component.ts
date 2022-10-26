import { Component, Input } from '@angular/core';
import { Video } from '../../video-data.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent {
  @Input() video?: Video;
}
