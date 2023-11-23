import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencePageComponent } from './component/experience-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ExperiencePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperiencePageRoutingModule { }
