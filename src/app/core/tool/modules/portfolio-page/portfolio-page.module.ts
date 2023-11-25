import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent, } from './component/portfolio-page.component';
import { PortfolioPageRoutingModule } from './portfolio-page-routing.module';
import { PortfolioModule } from 'src/app/core/modules/app-portfolio-module/portfolio.module';

@NgModule({
  declarations: [PortfolioPageComponent],
  imports: [CommonModule, PortfolioPageRoutingModule, PortfolioModule],
})
export class PortfolioPageModule { }
