app.service('loginRegisterService', [
    'Restangular',
    function(Restangular){
        this.loginUser = function(data){
            return Restangular.all('/users/login').post({user:data})
        }

        this.regUser = function(data){
            return Restangular.all('users').post({user:data})
        }
    }
])
