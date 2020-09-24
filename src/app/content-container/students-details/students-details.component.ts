import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.scss']
})


export class StudentsDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private http: HttpClient) {}
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  formChangesSubscription: any;
  statuses=[{"label":"Active", "value": true}, {"label":"InActive", "value": false}];
  actualStudent:any;
  student = this.formBuilder.group({
    id: '',
    name: '',
    active: '',
    dateOfBirth: ''
  });
  isModified=false;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.http.get(`http://localhost:8080/enrollees/${params['id']}`).subscribe(response=>{
        this.actualStudent = response;
        this.student.patchValue(this.actualStudent);
      });
    });

    this.formChangesSubscription =this.student.valueChanges.subscribe(val => {
      this.isModified = this.actualStudent.name.trim()!=val.name.trim() || this.actualStudent.active!=val.active;
    });
  }

  ngOnDestroy() {
    this.formChangesSubscription.unsubscribe();
  }

  onSubmit(value){
    const params = this.route.snapshot.params;
    this.http.put(`http://localhost:8080/enrollees/${params['id']}`, value,this.httpOptions).subscribe(response=>{
      this.actualStudent = response;
      this.student.patchValue(this.actualStudent);
      window.location.reload();
    });
  }
}
