app.run(function ($transitions, $cookies) {

    $transitions.onBefore({from:'register', to: '*'}, function(transition) {
        if(!$cookies.get('token') && transition.to().name != 'login'){
            return false;
        }
    });
    
    $transitions.onBefore({from:'login', to: '*'}, function(transition) {
        if(!$cookies.get('token') && transition.to().name != 'register'){
            return false;
        }
    });

    $transitions.onBefore({from:'*', to: 'login'}, function(transition) {
        if($cookies.get('token')){
            return false;
        }
    });

    $transitions.onBefore({from:'*', to: 'register'}, function(transition) {
        if($cookies.get('token')){
            return false;
        }
    });
});
