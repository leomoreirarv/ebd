// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ebd', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  
  $stateProvider.state('ebd',{
                      url: '/ebd',
                      abstract: true,
                      templateUrl: 'templates/home.html',
                      controlller: 'HomeController'
                        })
  
  $stateProvider.state('ebd.alunos',{
                       url: '/alunos',
                       templateUrl: 'templates/alunos.html',
                       controller: 'AlunosController'
                       })
  
  $stateProvider.state('ebd.classes',{
                       url: '/classes',
                       templateUrl: 'templates/classes.html',
                       controller: 'ClassesController'
                       })
  
  $stateProvider.state('ebd.mensagens',{
                       url: '/mensagens',
                       templateUrl: 'templates/mensagens.html',
                       controller: 'MensagensController'
                       })
  
  $stateProvider.state('ebd.relatorios',{
                       url: '/relatorios',
                       templateUrl: 'templates/relatorios.html',
                       controller: 'RelatoriosController'
                       });
  
  $urlRouterProvider.otherwise('/ebd')
});
