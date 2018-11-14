import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GetStartedPageComponent } from './get-started-page.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ GetStartedPageComponent ]
})
export class GetStartedModule { }
