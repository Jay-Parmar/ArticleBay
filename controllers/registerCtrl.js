app.controller('regCtrl', [
    '$scope', '$state', 'loginRegisterService', 'cookieService', 
    function($scope, $state, loginRegisterService, cookieService){

        $scope.user = {};
        $scope.usernameTaken = false;
        $scope.emailTaken = false;

        $scope.registerData = function(){
            $scope.dataLoading = true;
            loginRegisterService.registerUser($scope.user)
            .then(function(response) {
                $scope.dataLoading = false;
                $scope.dataLoading = false;
                $scope.usernameTaken = false;
                cookieService.putCookies(response);
                $state.go('articles');
            }, function(response){
                $scope.dataLoading = false;
                $scope.usernameTaken = false;
                $scope.emailTaken = false;
                if((response.data.errors.username != undefined) && response.data.errors.username[0] === "user with this username already exists.") {
                    $scope.usernameTaken = true;
                }
                if((response.data.errors.email != undefined) && response.data.errors.email[0] === "user with this email already exists.") {
                    $scope.emailTaken = true;
                }
                $scope.statuscode = response.status;
            })
        };
    }
]);
