import angular from 'angular';
import 'angular-ui-router';
import { AppController } from './app-controller';

'use strict';

let appModule = angular
  .module('ES6App', ['ui.router'])
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('index', {
        url: '/',
        controller: 'AppController as vm',
        templateUrl: 'app/app.html'
      });
  }])
  .controller('AppController', AppController);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, [ appModule.name ], {
    strictDi: true
  });
});

export default appModule;