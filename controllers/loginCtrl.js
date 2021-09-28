app.controller('loginCtrl', [
    '$scope', '$state', '$cookies', 'loginRegisterService', 
    function($scope, $state, $cookies, lrs){
    
        if($cookies.get('token')){
            $state.go('articles');
        }

        $scope.hasError = false;

        $scope.loginUser = function(email, password){
            user = {
                email: email,
                password: password
            }
            $scope.dataLoading = true;
            lrs.loginUser(user)
            .then(function(response){
                $scope.dataLoading = false;
                $scope.hasError = false;
                $cookies.put('token', response.user.token);
                $cookies.put('user', response.user.username);
                $cookies.put('email', response.user.email);
                $state.go('articles');
            }, function(response){
                $scope.hasError = true;
                $scope.dataLoading = false;
                $scope.message = JSON.stringify(response.data.errors);
                $scope.statuscode = response.status;
            })
        }
    }
]);
