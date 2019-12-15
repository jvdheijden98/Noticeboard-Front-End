import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.css']
})
export class PostItComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() description: string;

  ngOnInit() {
  }

}
