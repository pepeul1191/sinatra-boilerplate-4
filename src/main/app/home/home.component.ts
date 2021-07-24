import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../models/employee';

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
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter(); 
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
  public employees = Array<IEmployee>();
  public displayName = true;
  public messageError = '';

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

  constructor(private _employeeService: EmployeeService) { 
    this.dateToday = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    this.parentData = "";
  }

  ngOnInit(): void {
    this._employeeService.getAll()
      .subscribe(
        data => {
          console.log(data);
          this.employees = data;
          console.log(this.employees);
        },
        error => {
          console.log(error)
          this.messageError = error.text[0];
        },
      );
  }

  saludar(name : String): String{
    return `hola ${name}`;
  }

  public sendParentOutput(data: String){
    this.childEvent.emit(`el hijo dice ${data}`);
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
