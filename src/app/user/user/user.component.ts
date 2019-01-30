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

  userI: UserInterface;
  showMsg: boolean = false; //for showing waiting msg
  statusmsg = "Please wait while we are getting user details...";

  ngOnInit() {
    this.getUsers(1);
  }

  getUsers(pageNo: number) {
    this.showMsg = true;
    this.userService.getUsers(pageNo).subscribe((res) => {
      this.userI = res;
      this.userI.data = this.userI.data;
      this.showMsg = false;
    }, () => {
      this.statusmsg = "Something went wrong!Please check your connection..."
    })
  }

  deleteUser(user: User) {
    if (confirm('Are you sure you want delete the user?')) {
      this.userService.deleteUser(user).subscribe(() => {
        let index = this.userI.data.indexOf(user);
        console.log(index)
        this.userI.data.splice(index, 1);
      })
    }
  }
}


