import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
    });
  }));

  it('#addFourtyTwo should add 42 to a value', () => {
    let randomNumber: number = Math.floor(Math.random() * 100);
    expect(component.addFourtyTwo(randomNumber)).toEqual(randomNumber + 42);
  });

  it('#concatHey should concat Hey to a value', () => {
    let randomString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++) {
      randomString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
    }
    expect(component.concatHey(randomString)).toBe(randomString.concat('hey'));
  });

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports: [ HttpClientModule, ],
  //     declarations: [ TestComponent ],
  //     schemas: [
  //       NO_ERRORS_SCHEMA,
  //     ],
  //     providers: [CookieService]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TestComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
