import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent {
  constructor(private apiService: ApiService) {}

  saveData(data: any) {
    this.apiService.saveData(data).subscribe((response) => {
      console.log(response);
    });
  }
}
