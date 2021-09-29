app.controller('articleCtrl', [
    '$scope', '$state', 'articleService',
    function($scope, $state, articleService){

        $scope.currentPage = 1;
        $scope.pageSize = 5;
        $scope.articles = [];

        articleService.getArticles()
        .then(function(response){

            let articleList = response.articles;
            
            articleList.forEach(parseData);
            function parseData(item){
                $scope.articles.push({
                    slug: item.slug,
                    title: item.title,
                    body: item.body,
                    description: item.description,
                    author: item.author.username,
                    tagList: item.tagList 
                })
            }
        })

        $scope.goToArticle = function(slug){
            $state.go('articleDetail', {slug:slug})
        };

        $scope.numberOfPages = function(){
            return Math.ceil($scope.articles.length/$scope.pageSize);
        };

        $scope.create = function(){
            $state.go('createArticle');
        };
    }
]);

app.filter('startFrom', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    };
});
