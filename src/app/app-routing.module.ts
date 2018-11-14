import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesPageComponent} from './+files/files-page.component';
import { PhotosPageComponent } from './+photos/photos-page.component';
import { SharingPageComponent } from './+sharing/sharing-page.component';
import { LinksPageComponent} from './+links/links-page.component';
import { EventsPageComponent } from './+events/events-page.component';
import { GetStartedPageComponent } from './+get-started/get-started-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'files', component: FilesPageComponent },
  { path: 'photos', component: PhotosPageComponent },
  { path: 'sharing', component: SharingPageComponent },
  { path: 'links', component: LinksPageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: 'get-started', component: GetStartedPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
