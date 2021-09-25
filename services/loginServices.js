app.service('userLogin', [
    'Restangular',
    function(Restangular){
        this.loginUser = function(data){
            return Restangular.all('/users/login').post({user:data})
        }
    }
])
