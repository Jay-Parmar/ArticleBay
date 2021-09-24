app.controller('regCtrl', [
    '$scope', '$state', '$cookies', 'userRegister', 
    function($scope, $state, $cookies, userRegister){

        if($cookies.get('token')){
            $state.go('articles');
        }

        $scope.registerData = function(username, email, password){
            user = {
                username: username,
                email: email,
                password: password
            }
            console.log(JSON.stringify(user));
            userRegister.regUser(user)
            .then(function(response) {
                console.log(response)
                $cookies.put('token', response.user.token);
                $cookies.put('user', response.user.username);
                $cookies.put('email', response.user.email);
                $state.go('articles');
            }, function(response){
                console.log(response)
                $scope.message = JSON.stringify(response.data.errors);
                $scope.statuscode = response.status;
            })
        };
    }
])