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
                profileService.updateUser({
                    username: $scope.username,
                    email: $scope.email,
                    password: $scope.password
                }).then(function(response){
                    alert("Profile updated!");
                    $cookies.put('token', response.user.token);
                    $cookies.put('user', response.user.username);
                    $cookies.put('email', response.user.email);
                }, function(response) {
                    console.log(response);
                    if(response.data.errors.username[0] === "has already been taken")  
                        alert("Username is already taken!");
                    else if(response.data.errors.email[0] === "has already been taken")
                        alert("Email is already taken!");
                });
            }, function(error) {
                alert("Invalid credentials.");
            });
        }
    }
]);
