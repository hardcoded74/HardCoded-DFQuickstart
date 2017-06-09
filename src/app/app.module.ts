import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';


import { AppComponent } from './app.component';

//Authentication
import { Angular2TokenService } from './services/angular2-token.service';
import {
    A2tUiComponent,
    A2tSharedModule,
} from './a2t-ui';

import { A2tSignInComponent } from './a2t-ui/a2t-sign-in/a2t-sign-in.component';
import { A2tResetPasswordComponent } from './a2t-ui/a2t-reset-password/a2t-reset-password.component';
import { A2tSignUpComponent } from './a2t-ui/a2t-sign-up/a2t-sign-up.component';
import { A2tUpdatePasswordComponent } from './a2t-ui/a2t-update-password/a2t-update-password.component';


//Custom Components

import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';


//Routing

const appRoutes: Routes = [{
        path: 'session',
        component: A2tUiComponent,
        children: [
            { path: 'sign-in', component: A2tSignInComponent },
            { path: 'sign-up', component: A2tSignUpComponent },
            { path: 'reset-password', component: A2tResetPasswordComponent },
            {
                path: 'update-password',
                component: A2tUpdatePasswordComponent,
                canActivate: [Angular2TokenService]
            }
        ]
},


        {path: 'dashboard', component: DashboardComponent, canActivate:[Angular2TokenService]}

];




@NgModule({
  declarations: [
    AppComponent,
    A2tSignInComponent,
    A2tResetPasswordComponent,
    A2tSignUpComponent,
    A2tUpdatePasswordComponent,
    A2tUiComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    A2tSharedModule,
    FlashMessagesModule,
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
