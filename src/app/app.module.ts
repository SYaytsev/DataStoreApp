import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { PipesModule } from './shared/pipes';
import { LocalStoreService } from './core/services/local-store-service';

import { AppComponent } from './app.component';
import { LayoutContainerComponent } from './core/containers/layout/layout.container.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LeftNavigationMenuComponent } from './core/components/left-navigation-menu/left-navigation-menu.component';
import { SizeBarComponent } from './core/components/size-bar/size-bar.component';

import { FilesModule } from './+files/files.module';
import { PhotosModule } from './+photos/photos.module';
import { LinksModule } from './+links/links.module';
import { SharingModule } from './+sharing/sharing.module';
import { EventsModule } from './+events/events.module';
import { GetStartedModule } from './+get-started/get-started.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutContainerComponent,
    HeaderComponent,
    LeftNavigationMenuComponent,
    SizeBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    AppRoutingModule,
    CoreModule,
    FilesModule,
    PhotosModule,
    SharingModule,
    LinksModule,
    EventsModule,
    GetStartedModule
  ],
  exports: [],
  providers: [LocalStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
