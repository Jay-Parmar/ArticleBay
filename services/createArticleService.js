app.service('createArticleService', [
    'Restangular', '$cookies',

    function(Restangular, $cookies){

        Restangular.setDefaultHeaders({Authorization : 'Token ' + $cookies.get('token')});

        this.createArticle = function(data) {
            return Restangular.all('/articles').post({article:data});
        };
    }
]);
