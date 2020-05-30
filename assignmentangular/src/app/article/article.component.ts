import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleslist: any;
  constructor(private router: Router,private _userService: UserService) { }

  ngOnInit() {
    this._userService.getarticles().subscribe((data) => {
      this.articleslist = data;
    })
  }
  addarticle(){
    this.router.navigate(['addarticle']);
  }
  
}
