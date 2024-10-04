import { Component, OnInit } from '@angular/core';
import { UserDataLogin } from 'src/app/Classes/user-data-login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  userModel = new UserDataLogin("eslamyhya3@gmail.com", "anypaswd123", false);

  ngOnInit(): void {
  }

  
}

