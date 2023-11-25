import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencePageComponent, } from './component/experience-page.component';
import { ExperiencePageRoutingModule } from './experience-page-routing.module';
import { ExperienceModule } from 'src/app/core/modules/app-experience-module/experience.module';

@NgModule({
  declarations: [ExperiencePageComponent],
  imports: [CommonModule, ExperiencePageRoutingModule, ExperienceModule],
})
export class ExperiencePageModule { }
