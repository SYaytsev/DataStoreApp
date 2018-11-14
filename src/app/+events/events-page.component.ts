import { Component } from '@angular/core';

@Component({
  selector: 'app-events-page',
  template: '<app-page-title [title]="title"></app-page-title>'
})
export class EventsPageComponent { title = 'Events'; }
