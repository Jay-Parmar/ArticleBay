app.controller('createArticleCtrl', [
    '$scope', '$cookies', '$state', 'createArticleService',

    function($scope, $cookies, $state, createArticleService){

        if(!$cookies.get('token')) {
            $state.go('login');
        }

        $scope.create = function() {
            data = {
                title: $scope.title,
                description: $scope.description,
                body: $scope.body,
                tagList: ($scope.tags!=undefined) && (($scope.tags.length>1)? $scope.tags.split(",") : "")
            }

            createArticleService.createArticle(data)
            .then(function (response) {
                console.log(response);
                $state.go('articleDetail', {slug: response.article.slug});
            }, function(response){
                console.log("Error at Create Article!");
                console.log(response);
            })
        };
    }
]);
