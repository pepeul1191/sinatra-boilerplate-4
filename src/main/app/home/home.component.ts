import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //template: '<b>hola</b>',
  //styleUrls: ['./home.component.css'],
  styles:[`
    p{
      color:blue;
    }
  `],
})
export class HomeComponent implements OnInit {
  constructor() { 
    alert()
  }

  ngOnInit(): void {
  }

}
