import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirm: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(): void{
    console.log(this.user)
  }

  addFirstname(): void{
    /* if(this.firstname){
      this.firstnames.push(this.firstname)
      this.firstname = ""
    } */
  }

  updateFirstName(index: number){
    /* if(index >= 0){
      const name = this.firstnames[index];
      this.firstnames.splice(index, 1);
      this.firstname = name;
    } */
  }

  deleteFirstName(index: number): void{
    /* if(index >= 0){
      this.firstnames.splice(index, 1)
    } */
  }

}
