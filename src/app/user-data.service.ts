import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  user: {}
  constructor(private httpClient: HttpClient) { }

  public setUserDetails(user: {}) {
    this.user = user
    return this.user
  }
  public clearUserDetails() {
    this.user = null
  }

  public sendGetRequest() {
    return this.httpClient.get('https://randomuser.me/api/?results=5');
  }
}
