import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User = {
    email:"",
    password:"",
  }

  signInForm: FormGroup;

  email: FormControl;
  password: FormControl;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.email = formBuilder.control("",[Validators.email, Validators.required])
    this.password = formBuilder.control("",[Validators.required, Validators.minLength(6)])

    this.signInForm = formBuilder.group({
      email: this.email,
      password: this.password
    })
  }

  ngOnInit(): void {
  }

  handleSubmit(): void{
    console.log(this.signInForm.valid)
  }

}
