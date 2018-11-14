import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Photo } from '../../models/photo.model';
import { SortType } from '../../enums/sort-type.enum';
import { LocalStoreService } from '../../../core/services/local-store-service';

@Component({
  selector: 'app-photos-container',
  templateUrl: './photos-container.component.html',
  styleUrls: ['./photos-container.component.scss'],
})
export class PhotosContainerComponent implements OnChanges{
  sortTypes = [SortType.Name, SortType.Size, SortType.Modified];
  currentSortType = SortType.Modified;
  isDesc = true;

  constructor(private localStoreService: LocalStoreService) {}

  @Input() photos: Photo[];

  ngOnChanges(changes: SimpleChanges) {
    const photos = changes['photos'];
    if (photos && photos.currentValue) {
      const sizes = photos.currentValue.map((item) => item.FileSize);
      const totalSize = sizes.reduce((sum, current) => sum + current);
      this.localStoreService.setTotalPhotosSize(totalSize);
    }
  }

  public onSort(data: SortType) {
    if (this.currentSortType === data) {
      this.isDesc = !this.isDesc;
    }
    this.currentSortType = data;
  }
}
