import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface bookingInfo {
  name: String;
  contactNumber: String;
  email: String;
  bookingInfo: {
    check_in: String;
    check_out: String;
    roomType: String;
  };
  _id?: String;
}

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  checkIn = '';
  checkOut = '';
  roomType = '';
  firstName = '';
  lastName = '';
  contact = '';
  email = '';
  bookings: bookingInfo[] = [];
  ngOnInit(): void {
    this.http
      .get<bookingInfo[]>('http://localhost:3000/hotel/api/v1/bookings')
      .subscribe((responseData) => {
        console.log(responseData);
        this.bookings = responseData;
      });
  }

  onSubmit(formData: NgForm) {
    console.log(formData);
    this.checkIn = formData.value.checkIn;
    this.checkOut = formData.value.checkOut;
    this.roomType = formData.value.roomType;
    this.firstName = formData.value.firstName;
    this.lastName = formData.value.lastName;
    this.contact = formData.value.phone;
    this.email = formData.value.email;
    this.http
      .post<String>('http://localhost:3000/hotel/api/v1/bookings', {
        checkIn: this.checkIn,
        checkOut: this.checkOut,
        roomType: this.roomType,
        firstName: this.firstName,
        lastName: this.lastName,
        contact: this.contact,
        email: this.email,
      })
      .subscribe((responseData) => {
        console.log(responseData);
      });
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
