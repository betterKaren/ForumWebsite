import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
// import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    // SharedModule
    // HomeRoutingModule
  ],
  declarations: [
    MainPageComponent
  ],
  providers: [
    // HomeAuthResolver
  ]
})
export class MainPageModule {}
