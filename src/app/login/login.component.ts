import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  // login = new FormGroup({
  //   name: new FormControl(null, [Validators.required]),
  //   password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
  // })

  ngOnInit() {
    this.login = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)] )
    });
  }



constructor(private router: Router) { }

onLogin(): void {
    this.router.navigate(['/search']);
  }

}
