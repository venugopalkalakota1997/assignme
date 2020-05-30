import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './site/user-login/user-login.component';
import { UserSignupComponent } from './site/user-signup/user-signup.component';
import { AuthGuard } from './auth/auth.guard';
import { ArticleComponent } from './article/article.component';
import { AddarticleComponent } from './addarticle/addarticle.component';



const routes: Routes = [

  
  {path:"login",component:UserLoginComponent},
  {path:"signup",component:UserSignupComponent},
  {path:"article",component:ArticleComponent},
  {path:"addarticle",component:AddarticleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
