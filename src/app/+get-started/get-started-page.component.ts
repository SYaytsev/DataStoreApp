import { Component } from '@angular/core';

@Component({
  selector: 'app-get-started-page',
  template: '<app-page-title [title]="title"></app-page-title>'
})
export class GetStartedPageComponent { title = 'Get Started'; }
