import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  checkIn = '';
  checkOut = '';
  roomType = '';
  firstName = '';
  lastName = '';
  contact = '';
  email = '';

  onSubmit(formData: NgForm) {
    console.log(formData);
    this.checkIn = formData.value.checkIn;
    this.checkOut = formData.value.checkOut;
    this.roomType = formData.value.roomType;
    this.firstName = formData.value.name;
    this.lastName = formData.value.name;
    this.contact = formData.value.contact;
    this.email = formData.value.email;
  }

  guest = [
    {
      name: 'Fatima Doe',
      checkin: '11/11/2021',
      checkout: '13/11/2021',
      roomType: 'Suite',
    },
    {
      name: 'Fatima Doe',
      checkin: '11/11/2021',
      checkout: '13/11/2021',
      roomType: 'Suite',
    },
    {
      name: 'Fatima Doe',
      checkin: '11/11/2021',
      checkout: '13/11/2021',
      roomType: 'Suite',
    },
  ];

  addBooking() {}
}
