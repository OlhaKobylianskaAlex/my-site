import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBackComponent } from './component/button-back.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ButtonBackComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ButtonBackComponent]
})
export class ButtonBackModule { }
