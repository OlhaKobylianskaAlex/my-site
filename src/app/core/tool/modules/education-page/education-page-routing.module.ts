import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationPageComponent } from './component/education-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EducationPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationPageRoutingModule { }
