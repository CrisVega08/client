import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';

import 'rxjs/add/operator/map';
@Injectable()
export class CrudService {

  url = 'http://localhost:3001';
  constructor(
    private _http: HttpClient,
    // private _router: Router
  ) { }

  getData() {
    return this._http.get(`${this.url}/hotels`);
  }

  search(term: string) {
    return this._http.get(this.url + `/search?${term}?`)
                 .map( (res: any) => {
                   console.log(res);
                   return res;
                 });
  }
}
