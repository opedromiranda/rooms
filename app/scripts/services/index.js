'use strict';

var angular = require('angular');
var DummyService= require('./dummy');
var NavigatorService = require('./navigator-service');
var PeerConnectionService = require('./peer-connection-service');

module.exports = angular.module('rtcRoom.services', [])
    .service('DummyService', DummyService)
    .service('NavigatorService', NavigatorService)
    .service('PeerConnectionService', PeerConnectionService);
