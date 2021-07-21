import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  template: '<b>hola</b>',
  styleUrls: ['./home.component.css'],
  styles:[`
    p{
      color:blue;
    }
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style: italic;
    }
  `],
})
export class HomeComponent implements OnInit {
  public title = 'aprendiendo';
  public dateToday = new String();
  public txtId = 'txtName';
  public successClass = "text-success";
  public hasError = true;
  public name = '';
  public isSpecial = true;
  public messageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,
  };
  public color = 'blue';
  public greeting = 'hola';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
    fontSize: '60px',
  };
  public displayName = true;

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
    this.dateToday = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  }

  ngOnInit(): void {
  }

  saludar(name : String): String{
    return `hola ${name}`;
  }

  public onClick(event: Event){
    console.log(event);
    this.greeting = this.greeting + ' pepe';
    this.displayName = !this.displayName;
  }

  public logMessage(message: String){
    alert(message);
  }

  public testConstants(){
    console.log(GlobalConstants.baseURL)
  }
}
