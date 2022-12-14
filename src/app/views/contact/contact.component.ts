import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // contacthead = "contact"
  // formhead = "contact form"
  contacthead = "get in touch"
  formhead = "drop us a line"
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);
  subject = new FormControl('', [Validators.required]);
  textarea = new FormControl('', [Validators.required],)

  getErrorMessageName(){
    if (this.name.hasError('required')){
      return 'please enter your name'
    }
    return this.name.hasError('name') ? 'Not a valid name' : '';
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'please enter your email address';
    }
    return this.email.hasError('email') ? 'enter valid email address' : '';
  }

  getErrorMessagePhone(){
    if(this.phone.hasError('required')){
      return 'please enter your mobile number';
    }
    return this.phone.hasError('phone') ? 'enter valid mobile number' : '';
  }

  getErrorMessageSubject(){
    if(this.phone.hasError('required')){
      return 'please enter category';
    }
    return this.phone.hasError('phone') ? 'enter category' : '';
  }

  getErrorMessageTextArea(){
    if(this.phone.hasError('required')){
      return 'please enter your query/feedback';
    }
    return this.phone.hasError('phone') ? 'enter query/feedback' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
