import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';



const routes: Routes = [
  //{ path: '', },

  { path: 'header', component: HeaderComponent },

  { path: 'login', component: LoginComponent },

  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactComponent },

  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
