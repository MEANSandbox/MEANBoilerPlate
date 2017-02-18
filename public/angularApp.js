angular
    .module('app',['ui.router'])
    .config(config)
    .controller('HomeController',HomeController)

HomeController.$inject = ['$scope','$http']
config.$inject = ['$locationProvider','$urlRouterProvider','$stateProvider']

function HomeController($scope,$http) {
    $scope.test = "Rishabh Agrawal";
}
function config($locationProvider,$urlRouterProvider,$stateProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
// state declaration
    var helloState = {
        name : 'hello',
        url : '/hello',
        template : '<h1>Hello Template</h1>'
    }
    var aboutState = {
        name : 'about',
        url : '/about',
        template : '<h1>About Template</h1>'
    }
    $stateProvider
        .state(helloState)
        .state(aboutState)


}