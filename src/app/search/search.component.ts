import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = new FormGroup ({
    artist: new FormControl,
    track: new FormControl,
  })

  constructor() { }

  ngOnInit(): void {
  }

}
