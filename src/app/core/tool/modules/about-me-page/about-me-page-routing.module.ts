import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageComponent } from './component/about-me-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AboutMePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutMePageRoutingModule { }
