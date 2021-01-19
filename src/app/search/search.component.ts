import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  ngOnInit() {
    this.searchForm = new FormGroup ({
      'artist': new FormControl(null, Validators.required),
      'track': new FormControl(null),
    })
  }

  constructor (private router: Router) {}

  onSubmit() {
    console.log(this.searchForm);
    this.searchForm.reset();
    this.router.navigate(['search/search-results']);
  }
}
