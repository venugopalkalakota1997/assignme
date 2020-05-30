import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from '../interface/user';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient, private _authService: AuthenticationService) { }
  private subject = new Subject<any>();

  adduserUrl = environment.addUserUrl;
  articleurl = environment.articleurl

  addarticleUrl=environment.addarticleUrl
  getarticles() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.get<any>(this.articleurl, { headers });
  }
  userSignUp(userSignUpData: User) {
    //alert(JSON.stringify(userSignUpData))
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.post<User>(this.adduserUrl + '/addUser', userSignUpData, { headers });
  }
  addArticle(article:any){
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    // alert(JSON.stringify(article))
    return this._httpClient.post<any>(this.addarticleUrl , article, { headers });
  }
}
