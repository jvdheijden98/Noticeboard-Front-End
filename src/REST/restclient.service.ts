import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { stringify } from 'querystring';
import { catchError, map } from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

const endpoint = 'http://localhost:9090/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RESTclientService {
  // API_KEY = 'THIS_IS_A_KEY';

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
    ) {}

  public async getHelloWorld() {
    let value: string;
    await this.httpClient
      .get('http://localhost:9090/test/hello', { responseType: 'text' })
      .pipe(
        map((data: string) => value = data)
      ).toPromise();
    return value;
  }

  public async postTest(testObject: any) {
    //
    let value: string;
    await this.httpClient
    .post(endpoint + 'test/add', testObject, httpOptions)
    .pipe(
      map((data: string) => value = data)
    ).toPromise();
    return value;
  }

  public async login(username: string, password: string) {
    const submitModel: any = {};
    submitModel.username = username;
    submitModel.password = password;
    const JsonString = JSON.stringify(submitModel);

    let value: string;
    await this.httpClient
    .post(endpoint + 'authentication/login', JsonString, httpOptions)
    .pipe(
      map((data: string) => value = data)
    ).toPromise();
    return value;
  }

  public async register(username: string, password: string) {
    const submitModel: any = {};
    submitModel.username = username;
    submitModel.password = password;
    const JsonString = JSON.stringify(submitModel);

    let value: string;
    await this.httpClient
    .post(endpoint + 'authentication/register', JsonString, httpOptions)
    .pipe(
      map((data: string) => value = data)
     ).toPromise();
    return value;
  }

  public async load() {
    let returnModel: any = {};
    await this.httpClient
    .get(endpoint + 'notice/load')
    .pipe(
      map((data) => returnModel = data)
    ).toPromise();
    // console.log(value);
    return returnModel.notices;
  }

  public async upload(title: string, description: string) {
    const submitModel: any = {};
    let returnModel: any = {};
    submitModel.title = title;
    submitModel.description = description;
    submitModel.uuid = this.cookieService.get('token'); // Misschien doorgeven vanaf newNotice

    const JsonString = JSON.stringify(submitModel);
    console.log('upload function reached');
    await this.httpClient
    .post(endpoint + 'notice/upload', JsonString, httpOptions)
    .pipe(
      map((data) => returnModel = data)
    ).toPromise();
    console.log('post attempted');
    return returnModel;
  }
}
