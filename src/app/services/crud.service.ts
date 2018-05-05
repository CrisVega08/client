import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { getLocaleDateFormat } from '@angular/common';
@Injectable()
export class CrudService {
  
  url = 'http://localhost:3001'
  constructor(
    private _http: HttpClient,
    // private _router: Router
  ) { }

  getData() {
    return this._http.get(`${this.url}/hotels`);
  }
}
