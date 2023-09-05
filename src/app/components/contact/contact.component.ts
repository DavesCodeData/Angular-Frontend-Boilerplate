import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

// export class ContactComponent {
//   constructor(private http: HttpClient) {}

//   sendJson() {
//     const data = {
//       name: 'Test TES',
//       email: 'ATes@example.co',
//       message: 'if I can send a messag.'
//     };

//     this.http.post('http://localhost:3000/api/contact', data).subscribe(
//       response => {
//         console.log('Response:', response);
//         // Handle the response from the server here
//       },
//       error => {
//         console.error('Error:', error);
//         // Handle errors here
//       }
//     );
//   }
// }

export class ContactComponent {
  name: string = ''; // Initialize with empty string
  email: string = ''; // Initialize with empty string
  message: string = ''; // Initialize with empty string

  constructor(private http: HttpClient) {} // Inject HttpClient

  sendJson() {
    const data = {
      name: this.name, // Use the value from the property
      email: this.email, // Use the value from the property
      message: this.message // Use the value from the property
    };

    this.http.post('http://localhost:3000/api/contact', data).subscribe(
      response => {
        console.log('Response:', response);
        // Handle the response from the server here
      },
      error => {
        console.error('Error:', error);
        // Handle errors here
      }
    );
  }
}



