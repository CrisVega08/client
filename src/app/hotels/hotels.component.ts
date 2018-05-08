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
  all: Boolean = true;
  stars_values: Number[]=[];
  both_values: boolean =false;
  save_value: String ='';
  constructor(public _crud: CrudService) { }

  ngOnInit() {
    // this._crud.getData().subscribe((res: any) => {
    //   this.data = res;
    // });
    this.searchHotels('');
  }

  searchHotels(term: any) {
    console.log(this.name, 'valor name')
    let search_text = this.stars_values.toString();
    if(search_text === ''){
      search_text = '5,4,3,2,1'
    }
    search_text = `?stars=${search_text}`;
    if(term.name){
      this.save_value = term.name;
      search_text = `${search_text}&name=${term.name}`
      this.both_values = true;
    }else if(this.both_values) {
      search_text = `${search_text}&name=${this.save_value}`
    }

    if(this.name === '') this.both_values = false;
    
    this._crud.search(search_text)
        .subscribe(( res: any) => {
          this.data = res;
        });
  }
 
  checkValue(value){
    const value2= parseInt(value)
    return !!this.stars_values.find(e => e===value2)
  }


  async valueStart(event: any){
    event.checked = false;
    const value = Number(event.value)
    if(value === 6){
      this.stars_values = [];
      this.all = true;
    }
    else {
      this.stars_values.find(e => e === value) ? this.stars_values = this.stars_values.filter(e => e !== value) : this.stars_values.push(value);
    }
  
    if(this.stars_values.length === 5 || this.stars_values.length===0){
      this.stars_values = [];
      this.all = true;
    }else {
      this.all = false;
    }

    this.searchHotels('');
    
  }
}