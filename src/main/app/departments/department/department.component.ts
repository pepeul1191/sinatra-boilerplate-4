import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../department.service';
import { IDepartment } from '../../models/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public departments = Array<IDepartment>();
  public messageError = '';

  constructor(
    private _departmentService: DepartmentService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this._departmentService.getAll()
      .subscribe(
        data => {
          console.log(data);
          this.departments = data;
          console.log(this.departments);
        },
        error => {
          console.log(error)
          this.messageError = error.text[0];
        },
      );
  }

  departmentDetail(departmentId:number){
    this.router.navigate(['/department', departmentId]);
  }
}
