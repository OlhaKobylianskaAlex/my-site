import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationPageComponent, } from './component/education-page.component';
import { EducationPageRoutingModule } from './education-page-routing.module';
import { EducationModule } from 'src/app/core/modules/app-education-module/education.module';

@NgModule({
  declarations: [EducationPageComponent],
  imports: [CommonModule, EducationPageRoutingModule, EducationModule],
})
export class EducationPagePageModule { }
