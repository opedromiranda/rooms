'use strict';

var angular = require('angular');
require('angular-ui-router');
require('./controllers');
require('./services');
require('./factories');
require('./directives');

angular.module('rtcRoom', [
    'ui.router',
    'rtcRoom.controllers',
    'rtcRoom.services',
    'rtcRoom.factories',
    'rtcRoom.directives'
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
