import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input()
  public userForm:FormGroup
  static EDIT: boolean;

  static buildForm(userData:any) {
    // this.EDIT = !userData.disable;
    return new FormGroup({
      userName: new FormControl({value:userData.name?userData.name:'',disabled:userData.disabled}, Validators.required),
      age: new FormControl({value:userData.age?userData.age:'',disabled:userData.disabled},Validators.required),
      qualification: new FormControl({value:userData.qualification?userData.qualification:'',disabled:userData.disabled},Validators.required)
    })
  }
  constructor(
    private params:ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    // this.userForm = 
  }
  
}
