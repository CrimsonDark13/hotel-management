import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

$(document).mousemove(function (event: { pageY: any; pageX: any }) {
  $('.torch').css({
    top: event.pageY,
    left: event.pageX,
  });
});
