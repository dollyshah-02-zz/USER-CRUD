import { Component, OnInit } from '@angular/core';
import { User, UserInterface } from 'src/app/user';
import { UserService } from '../user.service';
import { deepEqual } from 'assert';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  showMsg: boolean = false;
  fetch: boolean = false;
  showlist: boolean = false;
  count:number=0;
  msg: string = "Please wait while we are getting user details...";
  fetchMsg: string = "Fetching data...";
  ngOnInit() {
    this.showMsg = true;
    this.showFirst(1);
    }
  userArray: User[] = [];
  userI: UserInterface;
  page: number;
  private url = 'https://reqres.in/api/';

  showFirst(pageNo: number) {

    this.fetch=true;
    this.showlist = true;
    this.userService.showList(pageNo).subscribe((res) => {

      this.userI = res;
      this.userArray = this.userI.data;
      this.page = this.userI.total_pages;
      this.showMsg = false;
      this.fetch = false;
    })
  }
  clickCount(x){
    return this.count=x;
  }

}

