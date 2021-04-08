import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContactComponent, MapComponent, ContactFormComponent],
  imports: [
    CommonModule,
     RouterModule, 
     FormsModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
