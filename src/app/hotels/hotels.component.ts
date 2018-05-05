import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service'
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  providers: [CrudService]
})
export class HotelsComponent implements OnInit {
  data: any[];
  constructor(public _crud: CrudService) { }
  
  ngOnInit() {
    this._crud.getData().subscribe((res:any) => this.data = res);
    console.log(this.data)
  }  

}
