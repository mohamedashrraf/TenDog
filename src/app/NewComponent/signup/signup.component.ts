import { Component, OnInit } from '@angular/core';
import { UserData } from '../../Classes/userData'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  userModel=new UserData("Eslam Yahia","eslamyhya3@gmail.com","anypass","anypass",true);
  
  ngOnInit(): void {
  }

}
