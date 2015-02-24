/*global describe, it */
'use strict';
var assert = require('assert');
var is = require('is');
var Wikia = require('../');
var tibia = new Wikia('tibia');

describe('node-wikia requests', function () {
  it('getNavigation()', function () {
    tibia.getNavigation().then(function(data) {
      assert(is.object(data), true);
    })
    .fail(function(err) {
      throw err;
    });
  });
});
