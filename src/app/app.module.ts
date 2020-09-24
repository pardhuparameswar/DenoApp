import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentsListComponent } from './content-container/students-list/students-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsDetailsComponent } from './content-container/students-details/students-details.component';
import { SelectStudentComponent } from './content-container/select-student/select-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentContainerComponent,
    HeaderComponent,
    FooterComponent,
    StudentsListComponent,
    StudentsDetailsComponent,
    SelectStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
