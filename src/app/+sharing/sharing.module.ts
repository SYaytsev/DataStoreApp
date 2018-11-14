import { NgModule} from '@angular/core';
import { SharedModule } from '../shared/shared.module'
import { SharingPageComponent } from './sharing-page.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ SharingPageComponent ]
})
export class SharingModule { }
