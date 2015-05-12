angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $state, $cordovaSQLite) {
 $scope.insert = function(model) {
        console.log(model);
        var query = "INSERT INTO company (name, phone, email) VALUES (?,?,?)";
        $cordovaSQLite.execute(db, query, [model.name, model.phone, model.email]).then(function(res) {
            console.log("INSERT ID test-> " + res.insertId);
        }, function (err) {
            console.log(err);
        });
    }
    
     $scope.more = function(model) {
        console.log(model);
        var query = "INSERT INTO company (name, phone, email) VALUES (?,?,?)";
        $cordovaSQLite.execute(db, query, [model.name, model.phone]).then(function(res) {
            console.log("INSERT ID test-> " + res.insertId);
        }, function (err) {
            console.log(err);
        });
        $state.go('app.more');
    }
})

.controller('MoreCtrl', function($scope, $state, $cordovaSQLite) {
   $scope.insert = function(model) {
        console.log(model);
        var query = "INSERT INTO company (name, phone, email) VALUES (?,?,?)";
        $cordovaSQLite.execute(db, query, [model.name, model.phone, model.email]).then(function(res) {
            console.log("INSERT ID test-> " + res.insertId);
        }, function (err) {
            console.log(err);
        });
         $state.go('app.playlists');
    }
  
});
