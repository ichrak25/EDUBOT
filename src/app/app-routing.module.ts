import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { HomeComponent } from './features/home/home.component';
<<<<<<< HEAD

import { LoginComponent } from './features/login/login.component';
=======
import { LoginComponent } from './features/login/login.component';
import { CertificationComponent } from './features/certification/certification.component';
>>>>>>> second version
import { SignupComponent } from './features/signup/signup.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent },  // This is the default route (i.e., Welcome page)
  { path: 'home', component: HomeComponent },  // Route for the Home page
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
<<<<<<< HEAD
=======
  { path: 'certification', component: CertificationComponent },
>>>>>>> second version
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
