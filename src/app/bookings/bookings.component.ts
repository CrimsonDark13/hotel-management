import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  guest = [
    {
      bookid: '202',
      name: 'Fatima Doe',
      checkin: '11/11/2021',
      checkout: '13/11/2021',
      roomType: 'Suite',
    },
    {
      bookid: '202',
      name: 'Fatima Doe',
      checkin: '11/11/2021',
      checkout: '13/11/2021',
      roomType: 'Suite',
    },
    {
      bookid: '202',
      name: 'Fatima Doe',
      checkin: '11/11/2021',
      checkout: '13/11/2021',
      roomType: 'Suite',
    },
  ];
}
