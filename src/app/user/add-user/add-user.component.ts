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
  userObject: User = new User();
  isEditMode: boolean = true;
  submitClick = "Submit";
  id: string;
 
  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private location: Location) {
  }

  ngOnInit() {
    // console.log("initial",this.userObject);
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getUsers();
    });
  }

  getUsers() {
    if (this.id == 'new') {
      this.isEditMode = false;
      this.userObject = new User();
    }
    else {
      this.userService.getUser(this.id).subscribe(data => {
        this.userObject = data.data;
      });
    }
  }

  postUser() {
    this.submitClick = "Please wait..."
    if (!this.isEditMode) {
      console.log("post")
      this.userService.postUser(this.userObject).subscribe(() => {
        this.submitClick = "Submit";
      });
    }
    else {
      console.log("put");
      this.userService.updateUser(this.userObject).subscribe(() => {
        this.submitClick = "Submit";
      });
    }
  }

  goBack() {
    this.location.back();
  }
}

