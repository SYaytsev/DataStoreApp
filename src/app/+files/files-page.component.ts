import { Component } from '@angular/core';

@Component({
  selector: 'app-files-page',
  template: '<app-page-title [title]="title"></app-page-title>'
})
export class FilesPageComponent { title = 'Files'; }
