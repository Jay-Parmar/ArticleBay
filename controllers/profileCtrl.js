app.controller('profileCtrl', [
    '$scope', '$cookies', 'profileService', 'cookieService', 
    
    function ($scope, $cookies, profileService, cookieService){

        $scope.email = $cookies.get('email');
        $scope.username = $cookies.get('user');

        $scope.update = function(){

            profileService.checkPass({
                email: $cookies.get('email'),
                password: $scope.currPassword
            }).then(function(response){
                cookieService.putCookies(response);
                profileService.updateUser({
                    username: $scope.username,
                    email: $scope.email,
                    password: $scope.password
                }).then(function(response){
                    cookieService.putCookies(response);
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
