import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EventsPageComponent } from './events-page.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ EventsPageComponent ]
})
export class EventsModule { }
