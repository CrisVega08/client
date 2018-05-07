import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  providers: [CrudService]
})
export class HotelsComponent implements OnInit {
  data: any[];
  name: String = '';
  stars: String;
  typeMoney: String = 'ARS';
  constructor(public _crud: CrudService) { }

  ngOnInit() {
    this._crud.getData().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }

  searchHotels(term: string) {
    console.log(term);

    // this._crud.search(term)
    //     .subscribe(( res: any) => {
    //       this.data = res;
    //     });
  }
}
