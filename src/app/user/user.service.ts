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
  private url = 'https://reqres.in/api/users';

  getUsers(pageNo): Observable<UserInterface> {
    console.log("above get");
    return this.http.get<UserInterface>(this.url + "?page=" + pageNo).pipe(
      catchError(this.handleError)
    );
  }
  //get users for editing
  getUser(id): Observable<EditUser> {
    return this.http.get<EditUser>(this.url + "/" + id).pipe(
      catchError(this.handleError));
  }
  postUser(user: User): Observable<User> {
    console.log("user in post", user);
    return this.http.post<User>(this.url ,  user).pipe(
      catchError(this.handleError));
  }
  deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(this.url + "/" + user.id).pipe(
      catchError(this.handleError));
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.url + "users/" + user.id, user).pipe(
      catchError(this.handleError));
  }
  handleError(error:Response) {
   return throwError(error);
  };
}


