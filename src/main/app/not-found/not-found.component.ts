import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
  `,
  styles: [
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { 
    location.href = '/error/access/404';
  }

  ngOnInit(): void {
  }

}
