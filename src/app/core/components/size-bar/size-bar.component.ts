import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-size-bar',
  templateUrl: './size-bar.component.html',
  styleUrls: ['./size-bar.component.scss']
})
export class SizeBarComponent {
  @Input() usedSize;
  @Input() totalSize;
}
