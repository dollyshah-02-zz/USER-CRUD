import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/app/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userObject: User = new User();
  submitbuttonToggle: boolean = false;
  id: string;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getUsers();
    });
  }

  getUsers() {
    if (this.id == 'new') {

      this.userObject = new User();
    }
    else {
      this.userService.getUser(this.id).subscribe(data => {
        this.userObject = data.data;
      });
    }
  }

  postUser() {
    this.submitbuttonToggle = true;
    if (this.id == 'new') {
      console.log("post");
      this.userService.postUser(this.userObject).subscribe(() => {
        this.submitbuttonToggle = false;
        this.router.navigateByUrl('/recordlist');
      });
    }
    else {
      console.log("put");
      this.userService.updateUser(this.userObject).subscribe(() => {
        this.submitbuttonToggle = false;
        this.router.navigateByUrl('/recordlist');
      });
    }
  }

  goBack() {
    this.location.back();
  }
}

