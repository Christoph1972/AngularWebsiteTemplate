import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormReactiveComponent } from './contact-form-reactive/contact-form-reactive.component';



@NgModule({
  declarations: [ContactComponent, MapComponent, ContactFormComponent, ContactFormReactiveComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
