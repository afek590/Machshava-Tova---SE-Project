/**
 * Created by DorianTs on 14/04/2016.
 */
(function(){
    var app = angular.module('SIT', []);

    app.controller('MainController', function(){
        $scope.manager = false;
        
        this.signIn = function()
        {
            // google id
        };
        
        this.isManager = function(){
            return $scope.manager;
        }
    });
})();

