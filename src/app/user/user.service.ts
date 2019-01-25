import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserInterface, User, EditUser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private url = 'https://reqres.in/';

  getUsers(pageNo): Observable<UserInterface> {
    console.log("above get");
    return this.http.get<UserInterface>(this.url + "api/users?page=" + pageNo)
      .pipe(
        catchError(this.handleError)
      );
  }
  //get users for editing
  getUser(id){
    return this.http.get<EditUser>(this.url+"api/users/"+id);;
  }
  postUser(user){
    return this.http.post(this.url+"users",user)
  }

  handleError() {
    let errorMessage = 'Something went wrong!!Please check your internet connection';
    window.alert(errorMessage);
    return throwError(errorMessage);
  };    // console.log("hi");
}


