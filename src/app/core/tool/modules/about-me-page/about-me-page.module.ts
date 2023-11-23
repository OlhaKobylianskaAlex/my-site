import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMePageComponent, } from './component/about-me-page.component';
import { AboutMePageRoutingModule } from './about-me-page-routing.module';
import { AboutMeModule } from 'src/app/core/modules/about-me-module/about-me.module';

@NgModule({
  declarations: [AboutMePageComponent],
  imports: [CommonModule, AboutMePageRoutingModule, AboutMeModule],
})
export class AboutMePageModule { }
