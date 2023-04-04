import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GolfApiService } from '../golf-rails-api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email = ''
  password = ''

  constructor(
    private golfApiService: GolfApiService,
    private router: Router,
    ) { }

  onSubmit() {
    this.golfApiService.signIn(this.email, this.password).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSignup() {
    this.golfApiService.signUp(this.email, this.password).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
