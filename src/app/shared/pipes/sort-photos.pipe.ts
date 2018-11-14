import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../../+photos/models/photo.model';
import { SortType } from '../../+photos/enums/sort-type.enum';

@Pipe({
  name: 'sortPhoto'
})
export class SortPhotosPipe implements PipeTransform {

  transform(photos: Photo[], type: SortType, order: number): Photo[] {
    let result: Photo[];
    if (!photos || !type) {
      return photos;
    }
    if (type === SortType.Name) {
      result = photos.sort((a, b) => {
        return a.FileName.localeCompare(b.FileName);
      });
    }
    if (type === SortType.Size) {
      result = photos.sort((a, b) => {
        return a.FileSize - b.FileSize;
      });
    }
    if (type === SortType.Modified) {
      result = photos.sort((a, b) => {
        return Date.parse(a.LastModifiedDate) - Date.parse(b.LastModifiedDate);
      });
    }
    return order ? result.reverse() : result;
  }
}
