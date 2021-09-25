app.service('articleDetailService', [
    'Restangular', '$cookies',
    function(Restangular, $cookies){

        Restangular.setDefaultHeaders({Authorization : 'Token ' + $cookies.get('token')});
    
        this.getArticle = function(slug) {
            return Restangular.one('/articles/' + slug).get();
        };

        this.delArticle = function(slug) {
            return Restangular.one('/articles/' + slug).remove();
        };
    }
]);
