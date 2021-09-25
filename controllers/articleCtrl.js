app.controller('articleCtrl', [
    '$scope', '$cookies', '$rootScope', '$state', 'articleService',
    function($scope, $cookies, $rootScope, $state, articleService){

        if (!$cookies.get('token')) {
            $state.go('login');
        }

        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.articles = [];

        articleService.getArticles()
        .then(function(response){
            console.log("getArticle Executed!");
            console.log(response);

            let articleList = response.articles;
            
            articleList.forEach(parseData);
            function parseData(item){
                $scope.articles.push({
                    title: item.title,
                    body: item.body,
                    description: item.description,
                    author: item.author.username,
                    tagList: item.tagList 
                })
            }

        }, function(response){
            console.log("Error received");
            console.log(response);

        })

        $scope.logout = function(){
            $cookies.remove('token');
            $cookies.remove('user');
            $cookies.remove('email');
            $state.go('login');
        };

        $scope.numberOfPages = function(){
            return Math.ceil($scope.articles.length/$scope.pageSize);
        }

        $scope.create = function(){
            $state.go('createArticle');
        }

    }
])

app.filter('startFrom', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    };
});
