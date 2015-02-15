'use strict';

define(['app'], function (app) {
  var myClass;
  beforeEach(function () {
    myClass = new app.MyClass();
  })
  describe('a simple test', function () {
    it('works properly', function () {
      expect(myClass.returnNums()).toEqual([3, 6, 9]);

    });

  });
  describe('a template string', function () {
    it('works properly', function () {
      expect(myClass.templateStrings()).toEqual('Hello Bob, how are you Today?');

    });

  });

  describe('a lexical this', function () {
    it('works properly', function () {
      expect(myClass.lexicalThis()).toEqual('Hello Bob, how are you Today?');

    });

  });

});