'use strict';

var angular = require('angular');
var DummyFactory = require('./dummy');

module.exports = angular.module('rtcRoom.factories', [])
    .factory('DummyFactory', DummyFactory);
