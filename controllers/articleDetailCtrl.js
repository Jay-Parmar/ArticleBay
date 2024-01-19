app.controller('articleDetailCtrl', [
    '$scope', '$cookies', '$state', 'articleService',
    function ($scope, $cookies, $state, articleService){

        articleService.getArticle($state.params.slug)
        .then(function (response) {
            $scope.name = response.article.author.username;
            $scope.title = response.article.title;
            $scope.description = response.article.description;
            $scope.body = response.article.body;
            $scope.tags = response.article.tagList;
        }, function(response){
            alert("Article not Found!");
        });

        $scope.delete = function () {
            if($scope.name === $cookies.get('user')) {
                articleService.delArticle($state.params.slug).then(
                    function(response) {
                        $state.go('articles');
                    }
                );
            }else{
                alert("You have to be the author in order to delete an article.");
            }            
        }
    }
]);
