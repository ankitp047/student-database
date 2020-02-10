import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { MarkRegisterComponent } from './mark-register/mark-register.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialsModule } from './materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserFormComponent } from './user-form/user-form.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { StudentMasterComponent } from './student-master/student-master.component';
import { StudentMarksFormComponent } from './student-marks-form/student-marks-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserMasterComponent,
    MarkRegisterComponent,
    UserFormComponent,
    SubjectComponent,
    SubjectFormComponent,
    StudentMasterComponent,
    StudentMarksFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
