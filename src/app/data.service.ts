import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './model/User';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private api = 'https://api.github.com/users';
  
  constructor(private httpClient : HttpClient) { }
  //get all users from github api
  getAllUsers(): Observable<User[]> {
    return this.httpClient.get(this.api)
    .pipe(
      map((res: any) =>  {
        return res.map( (r: User) =>  { 
          return { login: r.login, avatar_url: r.avatar_url} as User;
         });
      }
    ))
  }
}


