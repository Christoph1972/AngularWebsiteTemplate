import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, AfterViewInit {


  @ViewChild('myForm', { 'read': NgForm })
  myForm: NgForm | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    this.myForm?.value;
  }

  ngOnInit(): void {
  }

  startValue: string = "your name";

  startEmail = "1234@email.de"

  street: string = "";

  searchstring = "";

  send(formData: any): void {
    console.log("Data from Form", formData);
    console.log("##########################")
    console.log("Data from TS class", this.myForm?.value);
  }

}
