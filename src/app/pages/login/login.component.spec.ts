import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RESTclientService } from '../../../REST/restclient.service' ;

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { doesNotThrow } from 'assert';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // let restService: RESTclientService;
  // let httpClient: HttpClient;
  // let cookieService: CookieService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ ],
      providers: [ RESTclientService, {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
    });
  }) );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should login', async(inject([RESTclientService], (restService: RESTclientService) => {
  //   restService.login('Jerry', 'Gerry')
  //   .then((result) => {
  //     expect(result).not.toBeNull();
  //   });


  //   // tslint:disable-next-line: no-unused-expression
  //   //expect(restService.login('Jerry', 'Gerry')).not.toBeNull;
  // })));



});
