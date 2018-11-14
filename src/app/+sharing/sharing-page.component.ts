import { Component } from '@angular/core';

@Component({
  selector: 'app-sharing-page',
  template: '<app-page-title [title]="title"></app-page-title>'
})
export class SharingPageComponent { title = 'Sharing'; }
