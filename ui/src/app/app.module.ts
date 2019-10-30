import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsComponent } from './posts/posts.component';
import {FormsModule} from "@angular/forms";
import { SharePageComponent } from './pages/share-page/share-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    PostsComponent,
    SharePageComponent,
    PostsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
