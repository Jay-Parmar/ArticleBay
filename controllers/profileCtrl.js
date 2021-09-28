app.controller('profileCtrl', [
    '$scope', '$state', '$cookies', 'profileService',
    
    function ($scope, $state, $cookies, profileService){

        if(!$cookies.get('token')) {
            $state.go('login');
        }

        $scope.email = $cookies.get('email');
        $scope.username = $cookies.get('user');

        $scope.update = function(){

            profileService.checkPass({
                email: $cookies.get('email'),
                password: $scope.currPassword
            }).then(function(response){
                $cookies.put('token', response.user.token);
                $cookies.put('user', response.user.username);
                $cookies.put('email', response.user.email);
                profileService.updateUser({
                    username: $scope.username,
                    email: $scope.email,
                    password: $scope.password
                }).then(function(response){
                    $cookies.put('token', response.user.token);
                    $cookies.put('user', response.user.username);
                    $cookies.put('email', response.user.email);
                    alert("Profile updated!");
                }, function(response){
                    alert(JSON.stringify(response.data.errors));
                });
            }, function(error) {
                alert("Invalid credentials.");
            });
        }
    }
]);
