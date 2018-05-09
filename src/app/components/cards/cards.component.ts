import { Component, OnInit, Input } from '@angular/core';

import { Hotel } from '../../models/hotel'
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() hotel: Hotel;
  typeMoney: String = 'ARS';
  constructor() { }

  ngOnInit() {
  }

}
