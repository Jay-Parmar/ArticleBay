app.controller('loginCtrl', [
    '$scope', '$state', 'loginRegisterService', 'cookieService', 
    function($scope, $state, loginRegisterService, cookieService){

        $scope.hasError = false;

        $scope.loginUser = function(email, password){
            user = {
                email: email,
                password: password
            }
            $scope.dataLoading = true;
            loginRegisterService.loginUser(user)
            .then(function(response){
                $scope.dataLoading = false;
                $scope.hasError = false;
                cookieService.putCookies(response);
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
