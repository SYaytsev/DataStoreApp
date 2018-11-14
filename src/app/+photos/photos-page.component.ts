import { Component, OnInit } from '@angular/core';
import { PhotoFakeApiService } from './services/photos-fake-api.service';
import { Observable } from 'rxjs';
import { Photo } from './models/photo.model';

@Component({
  selector: 'app-photos-page',
  template: '<app-page-title [title]="title"></app-page-title><app-photos-container [photos]="photos$ | async"></app-photos-container>'
})
export class PhotosPageComponent implements OnInit {
  title = 'Photos';
  photos$: Observable<Photo[]>;

  constructor(private photoFakeApiService: PhotoFakeApiService) {}

  ngOnInit() {
    this.photos$ = this.photoFakeApiService.getPhotos();
  }
}
