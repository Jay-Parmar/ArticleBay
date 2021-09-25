app.config([
    '$stateProvider',
    'RestangularProvider',

    function($stateProvider, RestangularProvider) {

        let registerState = {
            name: 'register',
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'regCtrl'
        }
        let loginState = {
            name: 'login',
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        }
        let articleState = {
            name: 'articles',
            url: '/articles',
            templateUrl: 'templates/articles.html',
            controller: 'articleCtrl'
        }
        let createArticleState = {
            name: 'createArticle',
            url: '/articles/create',
            templateUrl: 'templates/createArticle.html',
            controller: 'createArticleCtrl'
        }
        let articleDetailState = {
            name: 'articleDetail',
            url: '/articles/:slug',
            templateUrl: 'templates/articleDetail.html',
            controller: 'articleDetailCtrl'
        }
        let profileState = {
            name: 'profile',
            url: '/profile',
            templateUrl: 'templates/profile.html',
            controller: 'profileCtrl'
        }

        $stateProvider.state(registerState);
        $stateProvider.state(loginState);
        $stateProvider.state(articleState);
        $stateProvider.state(createArticleState);
        $stateProvider.state(articleDetailState);
        $stateProvider.state(profileState);

        RestangularProvider.setBaseUrl('https://conduit.productionready.io/api');
    }
]);
