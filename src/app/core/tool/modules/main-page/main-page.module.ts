import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageHomeComponent } from './component/main-page-home.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageModule } from 'src/app/core/modules/main-page-modules/main-page-module/main-page.module';

@NgModule({
  declarations: [MainPageHomeComponent],
  imports: [CommonModule, MainPageRoutingModule, MainPageModule],
})
export class MainPageHomeModule { }
