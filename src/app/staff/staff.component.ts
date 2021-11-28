import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Staff {
  _id: number;
  name: string;
  designation: string;
  gender: string;
  dateOfJoining: string;
}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  staffs: Staff[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Staff[]>('http://localhost:3000/hotel/api/v1/staffs')
      .subscribe((response) => {
        this.staffs = response;
      });
  }

  staff = [
    {
      id: '101',
      name: 'Fatima',
      designation: 'Cleaner',
      gender: 'Male',
      dateOfJoining: '11/11/2021',
    },
    {
      id: '101',
      name: 'Fatima',
      designation: 'Cleaner',
      gender: 'Male',
      dateOfJoining: '11/11/2021',
    },
    {
      id: '101',
      name: 'Fatima',
      designation: 'Cleaner',
      gender: 'Male',
      dateOfJoining: '11/11/2021',
    },
    {
      id: '101',
      name: 'Fatima',
      designation: 'Cleaner',
      gender: 'Male',
      dateOfJoining: '11/11/2021',
    },
    {
      id: '101',
      name: 'Fatima',
      designation: 'Cleaner',
      gender: 'Male',
      dateOfJoining: '11/11/2021',
    },
  ];
}
