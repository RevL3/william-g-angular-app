import { EventEmitter, Injectable } from '@angular/core';

import { Search } from './search.model';

@Injectable()
export class SearchService {
  searchResults = new EventEmitter<Search>();

  private search: Search[] = [
    new Search(
      'Martys',
      'All that Sass',
      'https://static.boredpanda.com/blog/wp-content/uploads/2018/04/funny-swedish-band-covers-1970s-5adda7ae1c42c__700.jpg',
      []
    )
  ];

  getSearch() {
    return this.search
  }

}

