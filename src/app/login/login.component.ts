import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './authService.service';

interface Response {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  token = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(formData: NgForm) {
    console.log(formData);

    this.username = formData.value.username;
    this.password = formData.value.password;
    // this.http
    //   .post<Response>('http://localhost:3000/hotel/api/v1/auth/login', {
    //     username: this.username,
    //     password: this.password,
    //   })
    //   .subscribe((response) => {
    //     if (!response.token) {
    //       this.router.navigate(['error']);
    //     }
    //     this.token = response.token;
    //     console.log(this.token);

    //     this.router.navigate(['dashboard']);
    //   });
    this.auth.login(this.username, this.password);
  }
}
