import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() loggedIn: boolean;

  @Output() loggedOutEvent = new EventEmitter();

  constructor(private router: Router) { }
//EventEmitter from core allows for boolean
  onLogOut() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
