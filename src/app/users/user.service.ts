import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User.class';
import { JsonResponse } from '../json-response.class';

const url = 'http://localhost:5000/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list():Observable<JsonResponse> {
    return this.http.get(url + 'list') as Observable<JsonResponse>;
  }

  create(user: User):Observable<JsonResponse> {
    return this.http.post(url +'create', user) as Observable<JsonResponse>;
  }

  get(id: number):Observable<JsonResponse> {
    return this.http.get(url +'get/' + id) as Observable<JsonResponse>;
  }

  change(user: User):Observable<JsonResponse> {
    console.log(user);
    return this.http.post(url +'change', user) as Observable<JsonResponse>;
  }

  remove(user: User):Observable<JsonResponse> {
    return this.http.post(url +'remove', user) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
