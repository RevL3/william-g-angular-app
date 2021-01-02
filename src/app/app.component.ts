import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'william-g-angular-app';

  constructor(public router: Router) {}


  ngOnInit() { }
  //only shows header if url doesn't have a slash
  isLogIn() {
    return this.router.url !== '/';
  }

}
