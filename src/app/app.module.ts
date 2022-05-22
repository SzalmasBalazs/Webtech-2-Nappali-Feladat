import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FigureCreateComponent } from './components/figure-create/figure-create.component';
import { FigureListComponent } from './components/figure-list/figure-list.component';
import { FigureEditComponent } from './components/figure-edit/figure-edit.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RegistrationComponent } from './components/registration/registration.component'
import { AccountInfoComponent } from './components/account-info/account-info.component'
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FigureCreateComponent,
    FigureListComponent,
    FigureEditComponent,
    LoginComponent,
    RegistrationComponent,
    AccountInfoComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,

    BrowserModule,
    FormsModule
  ],

  providers: [ApiService],
  bootstrap: [AppComponent]

})


export class AppModule { }
