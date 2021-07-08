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
  public title = 'aprendiendo';

  public phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
