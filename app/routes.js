class Routes {

  constructor($stateProvider) {
    "use strict";

    $stateProvider
      .state('index', {
        url: '/',
        controller: 'AppController as appCtrl'
      });
  }

}

Routes.$inject = ['$stateProvider'];

export { Routes };