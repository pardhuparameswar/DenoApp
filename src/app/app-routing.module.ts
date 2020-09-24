import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentContainerComponent } from './content-container/content-container.component';
import { StudentsDetailsComponent } from './content-container/students-details/students-details.component';
import { SelectStudentComponent } from './content-container/select-student/select-student.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "enrolled"},
  {path: "enrolled", component: ContentContainerComponent,  
    children: [
      {path: "", component: SelectStudentComponent},
      {path: ":id", component: StudentsDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
