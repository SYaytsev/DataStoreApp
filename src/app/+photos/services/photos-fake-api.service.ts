import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Photo } from '../models/photo.model';

@Injectable()
export class PhotoFakeApiService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get('assets/photos.json').pipe(map(data => {
      const photos = data['photos'];
      return photos.map(function(photo: any) {
        return new Photo(photo);
      });
    }));
  }
}
