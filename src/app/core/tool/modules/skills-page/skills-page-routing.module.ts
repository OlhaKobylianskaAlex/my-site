import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsPageComponent } from './component/skills-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SkillsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsPageRoutingModule { }
