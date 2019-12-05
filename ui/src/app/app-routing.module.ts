import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { SharePageComponent } from "./pages/share-page/share-page.component";
import { PostsPageComponent } from "./pages/posts-page/posts-page.component";
import { FormsModule } from "@angular/forms";


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'share', component: SharePageComponent},
  {path: 'posts', component: PostsPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
