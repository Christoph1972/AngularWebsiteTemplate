import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ContactComponent, MapComponent, ContactFormComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
