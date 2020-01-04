import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl } from '@angular/forms';
import { RESTclientService } from 'src/REST/restclient.service';
import { Router } from '@angular/router';
import { GlobalVariable } from '../../../global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

information = '';

  constructor(
    private cookieService: CookieService,
    private restService: RESTclientService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.cookieService.set('testToken', 'woa, een token');
  }

  // todo if false login (+ wrong syntax login?)
  async onSubmit() {
    let returnModel: any = {};
    const username: any = this.LoginForm.get('username').value;
    const parsedUsername = String(username);
    const password: any = this.LoginForm.get('password').value;
    const parsedPassword = String(password);
    await this.restService.login(parsedUsername, parsedPassword)
    .then((data) => returnModel = data);
    // .then((data) => console.log(data));
    // Todo, als inlog niet goed is (anders krijg je null token)
    this.cookieService.set('token', returnModel.uuid);
    this.information = 'Cookie has been set!';
    GlobalVariable.Username = username;
    this.navigateToHome();
  }

  navigateToHome() {
    this.router.navigateByUrl('/noticeboard');
  }

}

