app.service('articleService', [
    '$cookies', 'Restangular',
    function($cookies, Restangular) {

        Restangular.setDefaultHeaders({Authorization : 'Token ' + $cookies.get('token')});

        this.getArticles = function () {
            return Restangular.one('/articles').get();
        };

        this.getArticle = function(slug) {
            return Restangular.one('/articles/' + slug).get();
        };

        this.delArticle = function(slug) {
            return Restangular.one('/articles/' + slug).remove();
        };

        this.createArticle = function(data) {
            return Restangular.all('/articles').post({article:data});
        };
    }
]);
