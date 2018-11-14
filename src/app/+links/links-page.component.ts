import { Component } from '@angular/core';

@Component({
  selector: 'app-links-page',
  template: '<app-page-title [title]="title"></app-page-title>'
})
export class LinksPageComponent { title = 'Links'; }
