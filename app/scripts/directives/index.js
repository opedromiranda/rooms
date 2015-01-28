'use strict';

var angular = require('angular');
var rStreamDirective = require('./r-stream-directive');

module.exports = angular.module('rtcRoom.directives', [])
    .directive('rStream', rStreamDirective);
