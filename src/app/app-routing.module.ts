import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FigureCreateComponent } from './components/figure-create/figure-create.component';
import { FigureListComponent } from './components/figure-list/figure-list.component';
import { FigureEditComponent } from './components/figure-edit/figure-edit.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'login'},
  {path: 'figure-create', component:FigureCreateComponent},
  {path: 'figure-edit/:id', component:FigureEditComponent},
  {path: 'figure-list', component:FigureListComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'account-info', component:AccountInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
