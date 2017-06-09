import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from '../../services/angular2-token.service';

import { SignInData } from '../../models/angular2-token.model';
import { A2tFormService } from '../a2t-shared';
import { SIGN_IN_FORM } from '../';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector:   'a2t-sign-in',
    providers:  [A2tFormService],
    template: `
        <a2t-headline>Sign In</a2t-headline>
        <a2t-error [errors]="_errors"></a2t-error>
        <a2t-form>Sign In</a2t-form>
        <a2t-links case="sign-in"></a2t-links>
    `
})
export class A2tSignInComponent {

    _errors: string[];

    constructor(
        public _formService: A2tFormService,
        public _sessionService: Angular2TokenService,
        public _router: Router,
        private flashMessage: FlashMessagesService,
    ) {
        this._formService.initForm(SIGN_IN_FORM);
        this._formService.submit$.subscribe(
            (data: SignInData) => this._sessionService.signIn(data).subscribe(
                (res: any) => this._handleSuccess(res),


                (error: any) => {
                    this.flashMessage.show(error.json().error.message, {
                        cssClass: 'alert-danger container',
                        timeout: 2000
                    });
                    this.flashMessage.grayOut(true);
                    this._handleError(error)
                }
            ));
    }

    private _handleSuccess(data: any) {
        this._errors = null;
        this._formService.unlockSubmit();
        this._router.navigate(['dashboard']);
    }

    private _handleError(error: any) {
        this._errors = error.json().errors;
        this._formService.unlockSubmit();
    }
}
