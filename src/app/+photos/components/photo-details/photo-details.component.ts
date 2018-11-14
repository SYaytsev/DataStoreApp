import {Component, Input, ViewEncapsulation} from '@angular/core';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent {
  @Input() photo: Photo;
}
