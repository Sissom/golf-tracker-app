import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route:Router, private userService:UserService)  { }


  signup(golferInfo: any) {
    return this.http.post("http://localhost:3000/api/v1/users/create", golferInfo)
  }

  login(user: any) {
    return this.http.post("http://localhost:3000/api/v1/users/login", user)
  }

  autoSignIn(){
    const token = this.getToken()
    if(!token){
      return;
    }

    this.http.get("http://localhost:3000/api/v1/users/me",
    {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    }).subscribe((res: any)=>{
      if(res.success){
        this.userService.setCurrentUser(res.payload.user);
        }
        this.route.navigate(['/home'])
      console.log(res);
    })
  }

  logout(){
    const token = this.getToken();

    this.http.delete("http://localhost:3000/api/v1/users/logout", {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    }).subscribe((res: any) => {
      if(res.success){
        this.userService.setCurrentUser(null);
        this.route.navigate(['/login']);
      }
    })
  }

  getToken() {
    const token = localStorage.getItem('token') ?? '';
    return JSON.parse(token)
  }

  setToken(token: any) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
