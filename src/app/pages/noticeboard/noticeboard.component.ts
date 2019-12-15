import { Component, OnInit } from '@angular/core';
import { RESTclientService } from 'src/REST/restclient.service';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})
export class NoticeboardComponent implements OnInit {

  constructor(private restService: RESTclientService) { }

  noticeList: Array<any>;
  async ngOnInit() {
    await this.restService.load()
    .then((data) => this.noticeList = data);
  }
}
