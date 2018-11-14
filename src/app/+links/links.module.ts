import { NgModule} from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LinksPageComponent } from './links-page.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ LinksPageComponent ]
})
export class LinksModule { }
