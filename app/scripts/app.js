(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
            
            .state('newroom', {
				url: '/',
				controller: 'NewRoomCtrl as newroom',
				templateUrl: '../templates/newroom.html'
			});
            
    }

    angular
        .module('blocChat', ['ui.router', 'ngRoute', 'firebase', 'ui.bootstrap'])
        .config(config);
})();