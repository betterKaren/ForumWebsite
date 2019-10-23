import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule} from "@angular/forms";

import { MainPageComponent } from './main-page.component';
import { PostsComponent } from "../../posts/posts.component";

// import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    FormsModule
    // SharedModule
    // HomeRoutingModule
  ],
  declarations: [
    MainPageComponent,
    PostsComponent
  ],
  providers: [
    // HomeAuthResolver
  ]
})
export class MainPageModule {}
