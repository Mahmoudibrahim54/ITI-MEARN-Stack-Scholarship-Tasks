import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './Components/students/students.component';
import { AboutComponent } from './Components/about/about.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AboutComponent,
    StudentDetailsComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
