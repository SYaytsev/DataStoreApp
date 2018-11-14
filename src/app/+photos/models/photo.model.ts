export class Photo {
  FileName: string;
  URL: string;
  FileSize: number;
  LastModifiedDate: string;

  constructor(data: any = {}) {
    this.FileName = data.fileName || '';
    this.URL = data.url || '';
    this.FileSize = data.fileSize || null;
    this.LastModifiedDate = data.lastModifiedDate || '';
  }
}
