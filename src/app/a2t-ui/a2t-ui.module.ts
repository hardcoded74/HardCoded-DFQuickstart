import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Angular2TokenService } from '../services/angular2-token.service';

import {
    A2tUiComponent,
    A2tSharedModule,
} from './';

import { A2tSignInComponent } from './a2t-sign-in/a2t-sign-in.component';
import { A2tSignUpComponent } from './a2t-sign-up/a2t-sign-up.component';
import { A2tResetPasswordComponent } from './a2t-reset-password/a2t-reset-password.component';
import { A2tUpdatePasswordComponent } from './a2t-update-password/a2t-update-password.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        A2tSharedModule,
    ],
    declarations: [
        A2tUiComponent,
        A2tSignInComponent,
        A2tSignUpComponent,
        A2tResetPasswordComponent,
        A2tUpdatePasswordComponent
    ]
})
export class A2tUiModule { }