import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GolfApiService {
  signIn(email: string, password: string) {
    const body = { email: email, password: password };
    return this.http.post(`${this.apiUrl}signin`, body);
  }

  signUp(email: string, password: string) {
    const body = { email: email, password: password };
    return this.http.post(`${this.apiUrl}signup`, body);
  }

  private apiUrl = 'http://localhost:3000/api/';

  getAllGolfers() {
    return this.http.get(`${this.apiUrl}golfers`);
  }

  constructor(private http: HttpClient) { }
}
