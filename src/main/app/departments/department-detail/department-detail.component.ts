import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __classPrivateFieldGet } from 'tslib';
import { DepartmentService } from '../../department.service';
import { IDepartment } from '../../models/department';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public id = 0;
  public department = <IDepartment>{}; 
  public messageError = '';
  constructor(
    private route: ActivatedRoute,
    private _departmentService : DepartmentService,
  ) { 
  }

  ngOnInit(): void {
    console.log(this.route);
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.id = parseInt(id);
      this._departmentService.getById(this.id)
      .subscribe(
        data => {
          console.log(data);
          this.department = data;
          console.log(this.department);
        },
        error => {
          console.log(error)
          this.messageError = error.text[0];
        },
      );
    }
  }

  edit(){
    console.log(this.department);
    this._departmentService.edit(this.department)
      .subscribe(
        data => {
          console.log(data);
          this.department = data;
          console.log(this.department);
        },
        error => {
          console.log(error)
          this.messageError = error.text[0];
        },
      );
  }
}
