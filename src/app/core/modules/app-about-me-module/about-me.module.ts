import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBackModule } from '../shared/button-back/button-back.module';
import { TitleBlockModule } from '../shared/title-block/title-block.module';

const modules = [ButtonBackModule, TitleBlockModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...modules],
})
export class AboutMeModule { }
