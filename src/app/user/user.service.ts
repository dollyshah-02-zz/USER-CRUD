import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private url = 'https://reqres.in/';

  showList(pageNo): Observable<UserInterface> {
    console.log("above get");
    return this.http.get<UserInterface>(this.url + "api/users?page=" + pageNo );
    // console.log("hi");
  }

}
