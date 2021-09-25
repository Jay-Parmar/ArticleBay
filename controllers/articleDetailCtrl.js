app.controller('articleDetailCtrl', [
    '$scope', '$cookies', '$state', 'articleDetailService',
    function ($scope, $cookies, $state, articleDetailService){

        articleDetailService.getArticle($state.params.slug)
        .then(function (response) {
            $scope.name = response.article.author.username;
            $scope.title = response.article.title;
            $scope.description = response.article.description;
            $scope.body = response.article.body;
            $scope.tags = response.article.tagList;
        }, function(response){
            console.log(response)
        });

        $scope.delete = function () {
            if($scope.name === $cookies.get('user')) {
                articleDetailService.delArticle($state.params.slug).then(
                    function(response) {
                        $state.go('articles');
                    }
                );
            }
            else {
                console.log("Not a valid user");
            }            
        }
    }
]);
