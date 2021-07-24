import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getAll() : Array<{id: number, name: string}>{
    return [
      {'id': 1, 'name': 'pepe'},
      {'id': 2, 'name': 'sila'},
      {'id': 3, 'name': 'yacky'},
      {'id': 4, 'name': 'teobaldo'},
    ];
  }
}
