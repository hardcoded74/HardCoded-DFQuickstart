import { Component } from '@angular/core';
import { Angular2TokenService } from './angular2-token.service';
import * as constants from './constants/constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({



        apiBase: constants.DREAMFACTORY_INSTANCE_URL + '/api/v2',
        signInPath: 'user/session',
        signInRedirect: '/session/sign-in',
        validateTokenPath: '',







      globalOptions: {
        headers: {
          'Content-Type':     'application/json',
          'Accept':           'application/json',
          'X-DreamFactory-API-Key': constants.DREAMFACTORY_API_KEY}}





  });
  }

  title = 'app works!';


  ngOnInit() {



  }

}
