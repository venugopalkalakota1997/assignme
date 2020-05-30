import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {
  name:any=this.authService.username
  ErrorMessage: string;
  articleAdded: boolean=false;
  newarticleAdded: boolean=true;
  constructor(private router: Router,private formBuild: FormBuilder,private authService: AuthenticationService,private _userService: UserService) { 
    
  }
  addArticle:FormGroup
  ngOnInit() {
    this.addArticle = this.formBuild.group({
      title: ['', [
        Validators.required
      ]],
      body: ['', [
        Validators.required
      ]],
      author: ['', [
        Validators.required
      ]],
    })
  }

  get title() {
    return this.addArticle.get('title');
  }
  get body() {
    return this.addArticle.get('body');
  }
  get author(){
    return this.addArticle.get('author');
  }
  addArticles(addArticle){
    
    let article: any =
    {
      "id": 0,
      "title": addArticle.title,
      "body": addArticle.body,
      "author":this.authService.username,
      
    }
    
    this._userService.addArticle(article).subscribe((response) => {
      this.articleAdded = true;
      this.ErrorMessage = null;
      this.newarticleAdded = false;
    }, (error: HttpErrorResponse) => {
      this.ErrorMessage = error.message;
      if (error instanceof Error) {
      } else {
      }
    })
  }

  articles(){
    this.router.navigate(['article']);
  }
}
