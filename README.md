# HC-DFQuickstart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

The first part of this project is intended to provide a quick method of authentication with Dreamfactory. This project would not have been possible without the angular2-token project created by Jan-Philipp (Neroniaky)
Visit the repository of angular2-token for some additional configuration options. 
[angular2-token](https://github.com/neroniaky/angular2-token) 

Currently this will authenticate existing users and allow for new account creation.

## Dreamfactory Configuration

In order for this to work with your Dreamfactory App you will first need to change the DREAMFACTORY_API_KEY and DREAMFACTORY_INSTANCE_URL located in src/app/constants/constants.ts file. 

You will also need to make sure you add expiry to be returned with your authentication response. To do this you must log into your Dreamfactory api and go to scripts. Once in scripts you
need to navigate to => user => user.session => (post) => user.session.post.post_process. If you have done this correctly under the heading "Script Name"it will read 
"user.session.post.post_process". Below that you will change "Script Type/Language" to PHP and upload the df-settings.php file located in the root of this repository. If you wish to use
 the github url to add the script it is https://github.com/hardcoded74/HardCoded-DFQuickstart/blob/master/df-settings.php
You must check "Active" along with "Allow script to modify response payload" for this to work. 

Then just save! 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Hardcoded-DFQuickstart
