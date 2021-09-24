import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(
    private service:SharedService,
    private matSnackBar: MatSnackBar
 ) { }

  @Input() dep:any;
  DepartmentId:string;
  DepartmentName:string;

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }

  addDepartment() {
    var val = {
                DepartmentId: this.DepartmentId,
                DepartmentName:this.DepartmentName
              }
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName:this.DepartmentName,
    };
    this.service.updateDepartment(val).subscribe(res=>{
      this.matSnackBar.open('Success!', 'Deparment name updated!', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-success'],
      });
    });
  }
}
