'use strict';

var angular = require('angular');
require('angular-ui-router');
require('./controllers');
require('./services');
require('./factories');

angular.module('rtcRoom', [
    'ui.router',
    'rtcRoom.controllers',
    'rtcRoom.services',
    'rtcRoom.factories'
])
.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'views/home.html'
                })
                .state('room', {
                    url: '/room/:roomName',
                    templateUrl: 'views/room.html'
                });

    }]);
