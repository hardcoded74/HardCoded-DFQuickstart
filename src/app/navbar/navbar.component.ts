import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Angular2TokenService } from '../services/angular2-token.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private flashMessage: FlashMessagesService,
              private angular2TokenService: Angular2TokenService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.angular2TokenService.signOut();
    this.flashMessage.show("You have been successfully logged out! See you next time.", { cssClass: 'alert-success container', timeout: 2000 });
    this.router.navigate(['/session/sign-in']);

    return false;
  }

}
