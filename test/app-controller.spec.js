import angular from 'angular';
import anguarMocks from 'anguar-mocks';

let getApCtrl;

describe('Karma', () => {
  "use strict";
  /*beforeEach(angular.module(appModule));

  beforeEach(inject(($controller) => {

    getApCtrl = () => $controller('AppController', {});

  }));*/

  it('should work fine with ES6', () => {
    console.log(anguarMocks);
    expect(1).toBe(1);
  });

});
