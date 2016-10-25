const bulk = require('bulk-require');


function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider, $httpProvider) {
    'ngInject';

    if (process.env.NODE_ENV === 'production') {
        $compileProvider.debugInfoEnabled(false);
    }

    $locationProvider.html5Mode({
        enabled    : false,
        requireBase: false
    });


    $urlRouterProvider.otherwise('/');

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common['Accept'] = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';


}

export default OnConfig;
