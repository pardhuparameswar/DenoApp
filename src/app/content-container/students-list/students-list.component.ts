import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  selectedStud;
  students;
  ngOnInit(): void {
   this.fetchEnrolled();
  }

  fetchEnrolled(){
   this.http.get("http://localhost:8080/enrollees").subscribe(response=>{
     this.students = response;
   });
  }
  onSelect(student: any): void{
    this.selectedStud = student;
  }
}
