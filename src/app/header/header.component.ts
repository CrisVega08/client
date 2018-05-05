import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logo = '../../assets/images/logo-almundo.svg'
  public alt = 'Al mundo logo'
  constructor() { }

  ngOnInit() {
  }

}
