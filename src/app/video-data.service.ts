import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  viewDetails: ViewDetail[];
}

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  constructor(private http: HttpClient) {}

  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(apiUrl);
  }
}
