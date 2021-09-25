app.controller('loginCtrl', [
    '$scope', '$state', '$cookies', 'userLogin', 
    function($scope, $state, $cookies, userLogin){
    
        if($cookies.get('token')){
            $state.go('articles');
        }

        $scope.loginUser = function(email, password){
            user = {
                email: email,
                password: password
            }
            console.log(JSON.stringify(user));
            $scope.dataLoading = true;
            userLogin.loginUser(user)
            .then(function(response){
                console.log(response)
                $scope.dataLoading = false;
                $cookies.put('token', response.user.token);
                $cookies.put('user', response.user.username);
                $cookies.put('email', response.user.email);
                $state.go('articles');
            }, function(response){
                console.log(response);
                $scope.dataLoading = false;
                $scope.message = JSON.stringify(response.data.errors);
                $scope.statuscode = response.status;
            })
        }
    }
]);
