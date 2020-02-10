import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { UserFormComponent } from '../user-form/user-form.component';
import { SubjectComponent } from '../subject/subject.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userForm:FormGroup
  subjectForm:FormGroup
  userData: any;
  ADD: boolean;
  id: any;
  constructor(
    private params:ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {

    let params = this.params.snapshot.params;
    let userData = localStorage.getItem('users');
    this.id = params.id;
    if(userData){
      let userAry = JSON.parse(userData);
      this.userData = userAry[params.id];
    }
    if(params.id==-1){
      this.ADD = true;
    }else{
      this.ADD = false;
      this.loadSubjects();
    }
    this.loadUserData();
  }

  submit(){
    console.log('this.user',this.userForm);
    let users = localStorage.getItem('users');
    if(users){
      let uAry = JSON.parse(users);
      uAry.push(this.userForm.value.details);
      localStorage.setItem('users',JSON.stringify(uAry));
    }else{
      let uAry = [];
      uAry.push(this.userForm.value.details);
      localStorage.setItem('users',JSON.stringify(uAry));
    }
    this.router.navigate(['user-master']);
  }
  loadUserData(){
    let formData = {
      name:"",
      age:0,
      qualification:"",
      disabled:false
    }
    if(this.userData){
      formData.name = this.userData.userName;
      formData.age = this.userData.age;
      formData.qualification = this.userData.qualification;
      formData['disabled'] = true
    }
    this.userForm = this.fb.group({
      details:UserFormComponent.buildForm(formData)
    })
  }

  loadSubjects(){
    let subjectAry = [];
    if(this.userData.subjects && this.userData.subjects.length>0){
      subjectAry = this.userData.subjects.map(e=>{e.disabled=true; return e});
      console.log('subjects',subjectAry);
    }else{
      subjectAry.push({
        subjectName : '',
        maxMarks : '',
        disabled:false
      })
    }
    this.subjectForm = this.fb.group({
      subjects:SubjectComponent.displaySubjects(subjectAry)
    })
  }
  submitSubject(){
    console.log('this.subjectForm',this.subjectForm);
    console.log('this.userData',this.userData);

    let sAry = [];
    if(this.userData.subjects && this.userData.subjects.length>0){

    }else{
      sAry = [...this.subjectForm.value.subjects];
    }
    let users = localStorage.getItem('users');
    let bkp = JSON.parse(users);
    bkp[this.id].subjects = sAry;
    localStorage.setItem('users',JSON.stringify(bkp));
    this.ngOnInit();
  }

}

