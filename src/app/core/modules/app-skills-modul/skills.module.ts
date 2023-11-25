import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBlockModule } from '../shared/title-block/title-block.module';
import { ButtonBackModule } from '../shared/button-back/button-back.module';

const modules = [ButtonBackModule, TitleBlockModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...modules],
})
export class SkillsModule { }
