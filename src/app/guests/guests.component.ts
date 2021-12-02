import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface guestInfo {
  name: String;
  contactNumber: String;
  bookingInfo: {
    check_in: Date;
    check_out: Date;
    roomType: String;
  };

  _id?: String;
}

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css'],
})
export class GuestsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  guests: guestInfo[] = [];

  ngOnInit(): void {
    this.http
      .get<guestInfo[]>('http://localhost:3000/hotel/api/v1/bookings')
      .subscribe((responseData) => {
        console.log(responseData);
        this.guests = responseData;
      });
  }
}
