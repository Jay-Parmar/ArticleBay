app.controller('articleCtrl', [
    '$scope', '$cookies', '$rootScope', '$state',
    function($scope, $cookies, $rootScope, $state){

        $scope.logout = function(){
            $cookies.remove('token');
            $cookies.remove('user');
            $cookies.remove('email');
            $state.go('login');
        };

    }
])