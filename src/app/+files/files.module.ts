import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FilesPageComponent } from './files-page.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ FilesPageComponent ]
})
export class FilesModule { }
