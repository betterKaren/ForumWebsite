import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { SharePageComponent } from "./pages/share-page/share-page.component";


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'share', component: SharePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
