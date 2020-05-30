import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedInUser = { loggedOut: true };
  isLoggedIn: boolean;
  validCredentials: boolean = false;
  accessToken: string;
  redirectUrl = '/';
  loggedIn: boolean = false;
  name: string;
  authUrl = environment.authUrl;
  private token: string;
  error: any;
  suffix: string;
  username: any;
  isLoggedInValid: boolean = false;
  LoggedIn: any;


  constructor(private router: Router, private httpClient: HttpClient) { }



  authenticateUser(user) {
    this.isLoggedIn = true;
   // alert(JSON.stringify(user))
    
    this.authenticateSpring(user.username, user.password).subscribe((data) => {
      
      this.username = user.username;
      this.loggedInUser = user;
      this.validCredentials = true;
      this.loggedIn = true;
      this.setToken(data.token);
      
      //alert(data.token)
      this.name = user.username;

     if (data.role == "ROLE_u") {
        this.router.navigate(['article']);
      }
      else {
        this.router.navigate(['login']);
      }
    },
      (error) => {
        this.validCredentials = false;
        this.isLoggedInValid = true;
        this.error = error.error.message;
        if (error.error.errors != null) {
          this.error = error.error.errors[0];

        }
      }
    )
  }

  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }
  authenticateSpring(user: string, password: string): Observable<any> {
    var newUser = user
    //alert(JSON.stringify(newUser))
    let credentials = btoa(newUser + ':' + password);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials)
    return this.httpClient.get(this.authUrl, { headers })
  }



}
