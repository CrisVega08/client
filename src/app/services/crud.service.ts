import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
@Injectable()
export class CrudService {

  url =  environment.url;
  constructor(
    private _http: HttpClient,
    // private _router: Router
  ) { }

  getData() {
    return this._http.get(`${this.url}/hotels`);
  }

  search(term: string) {
    return this._http.get(this.url + `/search${term}`)
                 .map( (res: any) => {
                  //  console.log(res);
                   return res;
                 });
  }
}
