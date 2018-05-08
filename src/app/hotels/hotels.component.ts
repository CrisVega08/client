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
  stars: boolean[]= [false,false,false,false,false];
  typeMoney: String = 'ARS';
  allOptions: Boolean = true;
  stars_values: Number[]=[];

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
  async valueStart(event){
    const value = Number(event.value)
    // this.allOptions=! this.allOptions;
    if(value === 6){
      // console.log('sss')
      this.stars = this.stars.map(e => false);
      event.checked = true;
    }else {
      this.stars[value - 1] = !this.stars[value - 1];
      const xxx = this.stars.findIndex(e => !e) > -1 && this.stars.findIndex(e => e) > -1;
      // console.log(this.stars.findIndex(e => !e) > -1, this.stars.findIndex(e => e) > -1, this.stars)
      if(xxx){
        // console.log('www')
        document.querySelector(".allstars-checkbox").checked = false;
      }
      else {
        document.querySelector(".allstars-checkbox").checked = true;
        setTimeout( () => {
          this.stars = this.stars.map(e => false);
        },0) 
      }
      
      
    }
    
    console.log(this.stars);
    console.log(event.value);
  }
  

  checkValue(value){
    const value2= parseInt(value)
    return !!this.stars_values.find(e => e===value2)
  }

  async valueStart2(event: any){
    event.checked = false;
    const value = Number(event.value)
    if(value === 6){
      this.stars_values = [];
      event.checked = true;
    }
    else {
      this.stars_values.find(e => e === value) ? this.stars_values = this.stars_values.filter(e => e !== value) : this.stars_values.push(value);
    }

    if(this.stars_values.length === 5 || this.stars_values.length===0){
      this.stars_values = [];
      document.querySelector(".allstars-checkbox").checked = true;
    }else {
      document.querySelector(".allstars-checkbox").checked = false;
    }
  }
}
