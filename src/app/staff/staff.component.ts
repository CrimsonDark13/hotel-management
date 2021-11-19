import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  staff = [
    {
      id: '101',
      name: 'Fatima',
      designation: 'Cleaner',
      gender: 'Male',
      doj: '11/11/2021',
    },
    {
      id: '101',
      name: 'Fatima',
      designation: 'Cleaner',
      gender: 'Male',
      doj: '11/11/2021',
    },
    {
      id: '101',
      name: 'Fatima',
      designation: 'Cleaner',
      gender: 'Male',
      doj: '11/11/2021',
    },
    {
      id: '101',
      name: 'Fatima',
      designation: 'Cleaner',
      gender: 'Male',
      doj: '11/11/2021',
    },
    {
      id: '101',
      name: 'Fatima',
      designation: 'Cleaner',
      gender: 'Male',
      doj: '11/11/2021',
    },
  ];
}
