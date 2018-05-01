import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_URL = 'http://192.168.32.1:3000/api/';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  user:any;
  url_login:String='signin';
  perfil:any;
  token:any;
  id_user_token:any;
  
  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }
  login(cred){
    return this.http.post(API_URL+this.url_login,cred);
  }
  ApiUrl(){
    return API_URL;
  }
  
}
