import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { RESTclientService } from 'src/REST/restclient.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  RegisterForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    comfirmPassword: new FormControl(''),
  });

  information = '';

    constructor(
      private cookieService: CookieService,
      private restService: RESTclientService
    ) { }

  ngOnInit() {
  }

  // Error voor duplicate registrations..
  async onSubmit() {

    let returnModel: any = {};
    const username: any = this.RegisterForm.get('username').value;
    const parsedUsername = String(username);
    const password: any = this.RegisterForm.get('password').value;
    const parsedPassword = String(password);
    const comfirmPassword: any = this.RegisterForm.get('comfirmPassword').value;
    const parsedComfirmedPassword: any = String(comfirmPassword);

    // Front end en backend veranderingen zodat user exists wordt gecheckt.
    if (parsedPassword === parsedComfirmedPassword) {
        await this.restService.register(parsedUsername, parsedPassword)
        .then((data) => returnModel = data);
        // Todo, als inlog niet goed is (anders krijg je null token)
        this.cookieService.set('token', returnModel.uuid);
        this.information = 'Cookie has been set!';
    } else {
      this.information = 'Something went wrong! - Please try again';
    }
  }
}
