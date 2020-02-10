import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMasterComponent } from './user-master/user-master.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { StudentMasterComponent } from './student-master/student-master.component';

const routes: Routes = [
  {path:'user-master',component:UserMasterComponent},
  {path:'user-details',component:UserDetailsComponent},
  {path:'student-master',component:StudentMasterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
