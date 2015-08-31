/**
 * Created by darciga on 30/08/15.
 */
(function () {
    'use strict';

    angular
        .module('thinkster.routes')
        .config(config);
    config.$inject = ['$routeProvider'];
    /**
     * @name config
     * @desc Define valid application routes
     */
    function config($routeProvider) {
        $routeProvider.when('/register', {
            controller: 'RegisterController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/register.html'
        }).otherwise('/');
    }
})();