import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosPageComponent } from './photos-page.component';
import { PhotosContainerComponent } from './containers/photos-container/photos-container.component';
import { PhotoFakeApiService } from './services/photos-fake-api.service';
import { SharedModule } from '../shared/shared.module';
import {PhotoDetailsComponent} from './components/photo-details/photo-details.component';
import {PipesModule} from '../shared/pipes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PipesModule
  ],
  declarations: [
    PhotosPageComponent,
    PhotosContainerComponent,
    PhotoDetailsComponent
  ],
  providers: [
    PhotoFakeApiService
  ]
})
export class PhotosModule {
}
