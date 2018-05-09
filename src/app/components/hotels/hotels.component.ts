import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  data: any[];

  constructor(private _crud: CrudService) { }

  ngOnInit() {
  }

  searchData(filters: string){
    this._crud.search(filters)
        .subscribe(( res: any) => {
          this.data = res;
        });
  }
}