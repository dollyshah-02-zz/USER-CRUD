import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User, UserInterface, User } from 'src/app/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userEditObject: User;
  showAvatar: boolean = true;
  id: string;
  addUser:User;
  

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private location: Location) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']; //(+) converts string 'id' to a number
      this.getUsers();
    });
    this.getUsers();
  }
  getUsers() {
    this.showAvatar = true;
    console.log(this.userEditObject);
    console.log("idd", this.id);
    if (this.id == 'new') {
      console.log("new user");
      this.showAvatar = false;
      this.userEditObject = null;
      console.log("add", this.showAvatar);
    }
    else {
      console.log("Edit mode");
      this.showAvatar = true;
      console.log("edit", this.showAvatar);
      this.userService.getUser(this.id).subscribe(data => {
        this.userEditObject = data.data;
        console.log(this.userEditObject);
      });
    }
  }
  postUser(){
    // this.userService.postUser()
    console.log("post user");
  }

  goBack() {
    debugger;
    this.location.back();
  }

}

