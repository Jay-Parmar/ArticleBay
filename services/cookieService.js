app.service('cookieService', [
    '$cookies', '$rootScope', 
    function($cookies, $rootScope){
        this.putCookies = function(response){
            $cookies.put('token', response.user.token);
            $cookies.put('user', response.user.username);
            $cookies.put('email', response.user.email);
            $rootScope.isAuth = true;
        };

        this.removeCookies = function(){
            $cookies.remove('token');
            $cookies.remove('user');
            $cookies.remove('email');
            $rootScope.isAuth = false;
        };
    }
]);