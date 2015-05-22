angular.module('starter.services', [])

.factory('Model', function($rootScope) {

  model = {};
  model.name = "";
  model.phone = "";  
  model.email = ""; 
  return model;
});