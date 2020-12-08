import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  getUsers() {
    let url = environment.API_URL + `/users`;
    return this._httpClient.get(url);
  }
}
