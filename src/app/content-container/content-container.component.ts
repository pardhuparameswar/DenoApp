import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentsListComponent } from './students-list/students-list.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit {
  @ViewChild(StudentsListComponent, { static: false }) students: StudentsListComponent;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationStart && (val as NavigationStart).url=="/enrolled"){
        this.students.onSelect(null);
      }
    });
  }
}
