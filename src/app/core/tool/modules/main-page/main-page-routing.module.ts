import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageHomeComponent } from './component/main-page-home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainPageHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
