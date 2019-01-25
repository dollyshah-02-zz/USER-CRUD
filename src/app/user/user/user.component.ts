import { Component, OnInit } from '@angular/core';
import { User, UserInterface } from 'src/app/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) { }

  userArray: User[] = [];
  userI: UserInterface;
  showMsg: boolean = false; //for showing waiting msg
  fetch: boolean = false;//for showing fetch msg
  showlist: boolean = false;//for showing list

  ngOnInit() {
    this.showMsg = true;
    this.getUsers(1);
  }
  getUsers(pageNo: number) {
    this.fetch = true;
    this.showlist = true;
    console.log("before service",this.userArray);
    this.userService.getUsers(pageNo).subscribe((res) => {
      this.userI = res;
      this.userArray = this.userI.data;
      this.showMsg = false;
      this.fetch = false;
    })
  }
  
}

