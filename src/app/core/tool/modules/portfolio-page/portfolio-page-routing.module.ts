import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioPageComponent } from './component/portfolio-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PortfolioPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioPageRoutingModule { }
