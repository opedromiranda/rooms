'use strict';

var angular = require('angular');
var DummyController = require('./dummy-controller');
var HomeController = require('./home-controller');
var RoomController = require('./room-controller');

module.exports = angular.module('rtcRoom.controllers', [])
    .controller('DummyController', ['$scope', DummyController])
    .controller('HomeController', ['$scope', '$state', 'NavigatorService', HomeController])
    .controller('RoomController', ['$scope', '$stateParams', RoomController]);
