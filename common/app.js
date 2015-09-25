'use strict';
var app = angular.module("indexApp", [
    "ui.router",
    "Cool.ApiService",
    "Cool.ApiFilter",
    "Cool.ApiDirective"
]);
app.run(['$state', '$stateParams', '$rootScope',
    function($state, $stateParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);



