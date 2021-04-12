import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { MyDateValidators } from 'src/app/my-validators/my-date-validators';

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
        message: new FormControl('', Validators.required),
        //TODO: set a initial data to todoay: https://stackoverflow.com/questions/55660262/how-can-i-set-my-reactive-form-date-input-value 
        desiredDate: new FormControl('', [MyDateValidators.isInFuture, Validators.required]),

        startDate: new FormControl('', [MyDateValidators.isInFuture, Validators.required]),
        endDate: new FormControl('', [MyDateValidators.isHigher(new Date(2021, 3, 20)), Validators.required]),
      }
    );
  }


  public get name() { return this.myForm.get(['personalData', 'name']); }
  public get street() { return this.myForm.get(['personalData', 'street']); }
  public get email() { return this.myForm.get(['personalData', 'email']); }


  public get message() { return this.myForm.get('message'); }
  public get desiredDate() { return this.myForm.get('desiredDate'); }


  send(myForm: FormGroup): void {
    console.log("Value from TS class:", this.myForm.value);
    console.log("##########################")
    console.log("Value from form:", myForm.value);
  }

}


