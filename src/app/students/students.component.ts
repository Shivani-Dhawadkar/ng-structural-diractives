import { Component, OnInit } from '@angular/core';
import { Istudents } from '../shared/model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  
  stdList : Istudents[] = [
    {
      fname : 'rohit',
      lname : 'sharma',
      nickname : 'hitman',
      email : 'rohit@gmail.com',
      contact : 1
    },
    {
      fname : 'yuvraj',
      lname : 'singh',
      nickname : 'uv',
      email : 'uv@gmail.com',
      contact : 2
    },
    {
      fname : 'virat',
      lname : 'kohli',
      nickname : 'chiku',
      email : 'chiku@gmail.com',
      contact : 3
    }
  ]
index: any;

  constructor() { }

  ngOnInit(): void {
  }

}
