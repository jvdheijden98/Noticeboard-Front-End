import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GlobalVariable } from 'src/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Live = true; // True om de test page NIET te laten zien
  username: string;

  constructor(
    private cookieService: CookieService,
  ) {
    this.username = GlobalVariable.Username;
   }

  ngOnInit() {

  }

  isLoggedIn() {
    if (this.cookieService.check('token')) {
      return true;
    }
  }

  isLive() {
    return this.isLive;
  }
}
