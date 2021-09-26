app.controller('navigationCtrl',[
    '$scope', '$state', '$cookies', '$window', 
    function($scope, $state, $cookies, $window){
        $scope.logout = function(){
            $cookies.remove('token');
            $cookies.remove('user');
            $cookies.remove('email');
            $state.go('login');
        };

        $scope.toArticles = function(){
            $state.go("articles");
        };

        $scope.back = function(){
            $window.history.back();
        };

        $scope.createArticle = function(){
            $state.go("createArticle");
        };

        $scope.profile = function(){
            $state.go("profile");
        };

        $scope.register = function(){
            $state.go("register");
        };

        $scope.login = function(){
            $state.go("login");
        };
    }
]);
