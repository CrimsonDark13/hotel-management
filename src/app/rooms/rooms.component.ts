import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Room {
  _id: String;
  roomType: String;
  roomDescription: String;
  roomImage: String;
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  rooms: Room[] = [];
  ngOnInit(): void {
    this.http
      .get<Room[]>('http://localhost:3000/hotel/api/v1/rooms')
      .subscribe((response) => {
        this.rooms = response;
      });
  }
}
