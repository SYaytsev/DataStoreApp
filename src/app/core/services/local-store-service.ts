import { Injectable } from '@angular/core';

@Injectable()
export class LocalStoreService {

  totalSize = 1000;
  totalPhotosSize: number;

  public setTotalPhotosSize(data: number) {
    return this.totalPhotosSize = data;
  }

  public getTotalPhotosSize(): number {
    return this.totalPhotosSize;
  }

  public getTotalSize(): number {
    return this.totalSize;
  }
}
