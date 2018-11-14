import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  template: '<h1>{{title}}</h1>',
  styles: [':host {display: inline-block; margin-top: 20px; color: #555555;}']
})
export class PageTitleComponent {
  @Input() title;
}
