import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/interface/user';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  signUpForm: FormGroup;
  userType: boolean = false;
  userAdded: boolean = false;
  signupErrorMessage: any;
  mentorAdded: boolean = false;
  newUserAdded: boolean = true;

  constructor(private formBuilder: FormBuilder, private _authService: AuthenticationService, private _userService: UserService, public _datepipe: DatePipe) { }

  ngOnInit() {
  
    this.signUpForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*"),
        Validators.maxLength(50)
      ]],
      username: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
        Validators.maxLength(50)
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(50)
      ]],
      confirmPassword: ['', [
        Validators.required,
        this.matchConfirmPassword.bind(this)
      ]],
      address: ['', [
        Validators.required,
        
      ]],
    })
  }

  get email() {
    return this.signUpForm.get('email');
  }
  get username() {
    return this.signUpForm.get('username');
  }
  
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }
  get address() {
    
    return this.signUpForm.get('address');
  }
  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.signUpForm) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signUpForm.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }

  userSignUp() {
    this.userType = !this.userType;
  }

  addUser(signUpForm) {    
 
      let user: User =
      {
        "id": 0,
        "username": signUpForm.username,
        "password": signUpForm.password,
        "email":signUpForm.email,
        "address":signUpForm.address
      }
     // alert(JSON.stringify(user))
      this._userService.userSignUp(user).subscribe((response) => {
        this.userAdded = true;
        this.signupErrorMessage = null;
        this.newUserAdded = false;
      }, (error: HttpErrorResponse) => {
        this.signupErrorMessage = error.message;
        if (error instanceof Error) {
        } else {
        }
      })

    }
  }

