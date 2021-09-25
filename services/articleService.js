app.service('articleService', [
    '$cookies', 'Restangular',
    function($cookies, Restangular) {

        Restangular.setDefaultHeaders({Authorization : 'Token ' + $cookies.get('token')});

        this.getArticles = function () {
            return Restangular.one('/articles').get();
        };
    }
]);  
