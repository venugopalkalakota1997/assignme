import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './site/user-login/user-login.component';
import { UserSignupComponent } from './site/user-signup/user-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { DatePipe } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { AddarticleComponent } from './addarticle/addarticle.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    ArticleComponent,
    AddarticleComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [DatePipe, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
