app.controller('createArticleCtrl', [
    '$scope', '$state', 'articleService',

    function($scope, $state, articleService){

        $scope.create = function() {
            data = {
                title: $scope.title,
                description: $scope.description,
                body: $scope.body,
                tagList: $scope.tags!=undefined && (($scope.tags.length>1)? $scope.tags.split(",") : "")
            }

            articleService.createArticle(data)
            .then(function (response) {
                $state.go('articleDetail', {slug: response.article.slug});
            }, function(response){
                alert("Could not create article.");
            })
        };
    }
]);
