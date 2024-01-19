app.controller('navigationCtrl',[
    '$scope', '$state', '$cookies', '$rootScope', '$window', 'cookieService', 
    function($scope, $state, $cookies, $rootScope, $window, cookieService){
        
        if($cookies.get('token')) {
            $rootScope.isAuth = true;
        }else{
            $rootScope.isAuth = false;
        }
        
        $scope.logout = function(){
            cookieService.removeCookies();
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
