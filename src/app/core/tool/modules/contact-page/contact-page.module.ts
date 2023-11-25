import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './component/contact-page.component';
import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactModule } from 'src/app/core/modules/app-contact-module/contact.module';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, ContactPageRoutingModule, ContactModule],
})
export class ContactPageModule { }
