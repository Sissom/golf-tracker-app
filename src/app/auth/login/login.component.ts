import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl(''),
   })


  constructor(private authService:AuthService, private userService:UserService, private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit (){
    const userValue = this.loginForm.value;
    this.authService.login(userValue).subscribe((res:any)=>{
      if(res.success){
      this.userService.setCurrentUser(res.payload.user);
      this.route.navigate(['/home']);
      this.authService.setToken(res.payload.token);
        }
      })
    }
  }
