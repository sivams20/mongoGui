import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  login(event, username, password){
    event.preventDefault();
    console.log(event);
    console.log(username);
    console.log(password);
    this.router.navigate(['dashboard']);
    //this.router.navigate(['dashboard/movies']);
  }

}
