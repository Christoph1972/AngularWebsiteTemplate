import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

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
            name: new FormControl('', Validators.required),
            street: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email])
          }),
        message: new FormControl('', Validators.required)
      }
    );
  }


  public get name() { return this.myForm.get(['personalData', 'name']); }
  public get street() { return this.myForm.get(['personalData', 'street']); }
  public get email() { return this.myForm.get(['personalData', 'email']); }


  send(myForm: FormGroup): void {
    console.log("Value from TS class:", this.myForm.value);
    console.log("##########################")
    console.log("Value from form:", myForm.value);
  }

}


