import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { SearchModel } from './search.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
  constructor(private http: Http) {
  }

  public find(query: string): Promise<SearchModel[]> {
    if( encodeURIComponent) {
      query = encodeURIComponent(query);
    }

    let url = `/api/search?query=${query}`;
    console.log("search url", url);
    return this.http.get(url)
                    .map(response => response.json().items)
                    .map(items => items.map(item => SearchModel.parse(item)))
                    .toPromise();
  }
}
