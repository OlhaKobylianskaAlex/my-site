import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsPageComponent, } from './component/skills-page.component';
import { SkillsPageRoutingModule } from './skills-page-routing.module';
import { EducationModule } from 'src/app/core/modules/education-module/education.module';

@NgModule({
  declarations: [SkillsPageComponent],
  imports: [CommonModule, SkillsPageRoutingModule, EducationModule],
})
export class SkillsPageModule { }
