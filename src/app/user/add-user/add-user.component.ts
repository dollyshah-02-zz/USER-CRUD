import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User, UserInterface, EditUser, } from 'src/app/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userEditObject: User = new User();
  showAvatar: boolean = true;
  id: string;
  show = false;
  submitClick = "Submit";
  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private location: Location) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getUsers();
    });
  }

  getUsers() {
    this.showAvatar = true;
    if (this.id == 'new') {
      this.showAvatar = false;
      this.userEditObject = new User();
    }
    else {
      console.log("edit");
      this.showAvatar = true;
      this.userService.getUser(this.id).subscribe(data => {
        this.userEditObject = data.data;
      });
    }
  }
  postUser() {
    console.log("post user");
    this.submitClick = "Please wait..."
    if (this.id == 'new') {
      this.userService.postUser(this.userEditObject).subscribe(() => {
        this.submitClick = "Submit";
        this.show = true;
      });
      console.log(this.userEditObject);
    }
    else {
      console.log("put");
      this.userService.updateUser(this.userEditObject).subscribe(() => {
        this.submitClick = "Submit";
        this.show = false;
      });
      this.show = true;
    }
  }
  goBack() {
    this.location.back();
  }
}

