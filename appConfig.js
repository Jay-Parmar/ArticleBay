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
        $stateProvider.state(registerState);
        $stateProvider.state(loginState);
        $stateProvider.state(articleState);

        RestangularProvider.setBaseUrl('https://conduit.productionready.io/api');
    }
]);
