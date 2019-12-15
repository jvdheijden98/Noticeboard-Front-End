import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { RESTclientService } from 'src/REST/restclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.css']
})
export class CreateNoticeComponent implements OnInit {

  NewNoticeForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private restService: RESTclientService
  ) {}

  ngOnInit() {
  }

  async onSubmit() {
    let returnModel: any = {};
    const title: any = this.NewNoticeForm.get('title').value;
    const parsedTitle = String(title);
    const description: any = this.NewNoticeForm.get('description').value;
    const parsedDescription = String(description);

    await this.restService.upload(parsedTitle, parsedDescription)
    .then((data) => returnModel = data);
    this.router.navigateByUrl('/noticeboard');
  }

  isLoggedIn() {
    return this.cookieService.check('token');
  }

}
