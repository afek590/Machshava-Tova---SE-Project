var MANAGERS = ["afek590@gmail.com", "someone@gmail.com"];

/*var MYLIBRARY = MYLIBRARY || (function(){
    
    return{
        init: function(Args){
            MANAGER = Args;
        },
        isManager: function(){
            alert("This manager is now " + MANAGER);
            return MANAGER;
        }
    };
}());*/

(function(){
    var app = angular.module('SIT', ['ngRoute']);
    
    app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        controller: 'MainController',
        controllerAs: 'main',
        templateUrl: 'views/main.html'})
    .when('/panel',{
        controller: 'MainController',
        controllerAs: 'main',
        templateUrl: 'views/panel.html'});
    }]);

    app.controller('MainController', ['$scope', '$window', function($scope, $window) {
        MANAGAR = false;
        
}])})();
