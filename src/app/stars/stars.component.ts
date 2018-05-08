import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() value: number = 0;
  @Input() icons: String[] = ['star'];
  @Input() color: String = '#fb0';
  @Input() sm: boolean = false;
  route = `../../assets/icons/filters/`
  numbers;
  constructor() {}
  ngOnInit() {
    if (this.value) {
      this.route = `../../assets/icons/filters/`;
    } else {
      this.value = 1,
      this.route = `../../assets/icons/amenities/`;
    }
    this.numbers = Array(this.value).fill(0, this.value).map((x,i)=>i);
    }
}