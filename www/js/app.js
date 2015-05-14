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
                           views:{
                            'conteudo':{   
                                templateUrl: 'templates/home.html'
                            }    
                           }   
                       })
  
  $stateProvider.state('ebd.alunos',{
                       url: '/alunos',
                           views:{
                            'conteudo':{   
                                templateUrl: 'templates/alunos.html'
                            }    
                           }   
                       })
  
  $stateProvider.state('ebd.classes',{
                       url: '/classes',
                           views:{
                            'conteudo':{   
                                templateUrl: 'templates/classes.html'
                            }    
                           }   
                       })
  
  $stateProvider.state('ebd.mensagens',{
                       url: '/mensagens',
                           views:{
                            'conteudo':{   
                                templateUrl: 'templates/mensagens.html'
                            }    
                           }   
                       })
  
  $stateProvider.state('ebd.relatorios',{
                       url: '/relatorios',
                           views:{
                            'conteudo':{   
                                templateUrl: 'templates/relatorios.html'
                            }    
                           }   
                       })
  
  
  /*
  $stateProvider.state('ebd.alunos',{
                       url: 'ebd/alunos',
                       templateUrl: 'templates/alunos.html'
                       })
  
  $stateProvider.state('ebd.classes',{
                       url: 'ebd/classes',
                       templateUrl: 'templates/classes.html'
                       })
  
  $stateProvider.state('ebd.mensagens',{
                       url: 'ebd/mensagens',
                       templateUrl: 'templates/mensagens.html'
                       })
  
  $stateProvider.state('ebd.relatorios',{
                       url: 'ebd/relatorios',
                       templateUrl: 'templates/relatorios.html'
                       })
  */
  $urlRouterProvider.otherwise('/ebd')
})
