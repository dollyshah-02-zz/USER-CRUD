import { Component, OnInit, ErrorHandler } from '@angular/core';
import { User, UserInterface } from 'src/app/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) { }

  userArray: User[];
  userI: UserInterface;
  showMsg: boolean = false; //for showing waiting msg
  fetch: boolean = false;//for showing fetch msg
  showlist: boolean = false;//for showing list
  statusmsg = "Please wait while we are getting user details...";

  ngOnInit() {
    this.showMsg = true;
    this.getUsers(1);
    this.fetch = false;
  }
  getUsers(pageNo: number) {
    this.fetch = true;
    this.showlist = true;
    this.userService.getUsers(pageNo).subscribe((res) => {
      this.userI = res;
      this.userArray = this.userI.data;
      this.showMsg = false;
      this.fetch = false;
    }, () => {
      this.statusmsg = "Something went wrong!Please check your connection..."
    })
  }
  deleteUser(user) {
    if (confirm('Are you sure you want delete the user?')) {
      this.userService.deleteUser(user).subscribe(() => {
        let index = this.userArray.indexOf(user);
        console.log(index)
        this.userArray.splice(index, 1);
      })
    }
  }
}


