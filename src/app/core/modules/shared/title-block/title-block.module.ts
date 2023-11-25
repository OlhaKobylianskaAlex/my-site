import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBlockComponent } from './component/title-block.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [TitleBlockComponent],
  imports: [CommonModule, MatIconModule],
  exports: [TitleBlockComponent]
})
export class TitleBlockModule { }
