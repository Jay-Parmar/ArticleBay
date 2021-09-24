app.service('userRegister', [
    'Restangular', 
    function(Restangular){
        this.regUser = function(data){
            return Restangular.all('users').post({user:data})
        }
    }
])
