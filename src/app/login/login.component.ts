import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() loggedIn: boolean;


  login = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
  })


constructor(private router: Router) { }

onLogin(): void {
    this.router.navigate(['/search'])
  }

  ngOnInit(): void {

  }

}
