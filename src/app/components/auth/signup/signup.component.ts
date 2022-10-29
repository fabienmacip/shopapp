import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname: string = "OI"
  firstnames: string[] = ['Lionel', 'Antoine', 'Julie', 'Oscar']


  constructor() { }

  ngOnInit(): void {
  }

  addFirstname(): void{
    if(this.firstname){
      this.firstnames.push(this.firstname)
      this.firstname = ""
    }
  }

  updateFirstName(index: number){
    if(index >= 0){
      const name = this.firstnames[index];
      this.firstnames.splice(index, 1);
      this.firstname = name;
    }
  }

  deleteFirstName(index: number): void{
    if(index >= 0){
      this.firstnames.splice(index, 1)
    }
  }

}
