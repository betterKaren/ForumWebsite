import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from "@angular/forms";
import { SharePageComponent } from './pages/share-page/share-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas);
library.add(far);
library.add(fab);

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
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
