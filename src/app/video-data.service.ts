import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const apiUrl = 'https://api.angularbootcamp.com/videos';

export interface ViewDetail {
  age: number;
  region: string;
  date: string;
}

export interface Video {
  id: string;
  title: string;
  author: string;
  thumbnailUrl: string;
  viewDetails: ViewDetail[];
}

export interface RawVideo {
  id: string;
  title: string;
  author: string;
  viewDetails: ViewDetail[];
}

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http
      .get<RawVideo[]>(apiUrl)
      .pipe(map(rawVideos => {
        return rawVideos.map((video) => {
          return {
            ...video,
            thumbnailUrl: 'https://img.youtube.com/vi/' + video?.id + '/hqdefault.jpg'
          }
        })
      }))
  }
}
