import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss']
})
export class UserMasterComponent implements OnInit {
  userList: any[]=[];

  constructor() { }

  ngOnInit() {
    let userList = localStorage.getItem('users');
    this.userList = JSON.parse(userList);
    console.log('userList',this.userList);
  }

}
