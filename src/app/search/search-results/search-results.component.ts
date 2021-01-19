import { Component, OnInit } from '@angular/core';

import { Search } from '../search.model';
import { SearchService } from '../search.service'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [SearchService]
})
export class SearchResultsComponent implements OnInit {
  search: Search;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

}
