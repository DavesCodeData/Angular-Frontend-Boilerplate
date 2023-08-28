import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// export class ContactService {
//   private apiUrl = '/api'; // Base URL for your API (make sure it matches the server setup)

//   constructor(private http: HttpClient) {}

//   saveContactInfo(data: any): Observable<any> {
//     const url = `${this.apiUrl}/save`; // Construct the full URL for the POST request
//     return this.http.post(url, data);
//   }
// }

export class sendContactInfo {
  private serverUrl = 'http://localhost:3000'; // Your Node.js server URL

  constructor(private http: HttpClient) {}

  saveData(data: any) {
    return this.http.post(`${this.serverUrl}/api/save`, data);
  }
}