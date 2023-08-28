import { Component } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';//This angular module allows for a scroll down option under QuickLinks in the html file
=======
>>>>>>> 7484098ec5d7b738f4adc9e33b32231707b9e9f0

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
<<<<<<< HEAD
//   images: string[] = [
//   ];
// }
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.querySelector(`#${fragment}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
  }






=======
  images: string[] = [
  ];
}
>>>>>>> 7484098ec5d7b738f4adc9e33b32231707b9e9f0
