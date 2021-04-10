import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-contact-form-reactive',
  templateUrl: './contact-form-reactive.component.html',
  styleUrls: ['./contact-form-reactive.component.scss']
})
export class ContactFormReactiveComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createMyForm();

    console.log(this.myForm.value);
  }

  createMyForm(): void {
    this.myForm = this.formBuilder.group(
      {
        personalData: this.formBuilder.group(
          {
            name: new FormControl(''),
            street: new FormControl(''),
            email: new FormControl('')
          }),
        message: new FormControl('')
      }
    );
  }

  send(myForm : FormGroup): void {
    console.log("Value from TS class:",this.myForm.value);
    console.log("##########################")
    console.log("Value from form:", myForm.value);
  }

}


