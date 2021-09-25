app.service('profileService', [
    '$cookies', 'Restangular', 

    function ($cookies, Restangular){
        Restangular.setDefaultHeaders({Authorization : 'Token ' + $cookies.get('token')});

        this.checkPass = function(data) {
            return Restangular.all('/users/login').post({user:data});
        }

        this.updateUser = function(data) {
            return Restangular.all('/user').customPUT({user:data});
        }
    }
]);
