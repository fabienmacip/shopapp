import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup

  firstname: FormControl
  email: FormControl
  subject: FormControl
  phone : FormControl
  message : FormControl

  contact: Contact | undefined

  constructor(
    private fb: FormBuilder
  ) {
      this.firstname = this.fb.control("",[Validators.required, Validators.minLength(3)])
      this.email = this.fb.control("",[Validators.required, Validators.email])
      this.subject = this.fb.control("",[Validators.required, Validators.minLength(10)])
      this.phone = this.fb.control("",[Validators.required, Validators.minLength(5)])
      this.message = this.fb.control("",[Validators.required, Validators.minLength(20)])

      this.contactForm = this.fb.group({
        firstname: this.firstname,
        email: this.email,
        subject: this.subject,
        phone: this.phone,
        message: this.message,
      })
  }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

  handleSubmit(){
    this.contact = {
      firstname: this.firstname.value,
      email: this.email.value,
      subject: this.subject.value,
      phone: this.phone.value,
      message: this.message.value
    }
    console.log(this.contact)
  }

}
