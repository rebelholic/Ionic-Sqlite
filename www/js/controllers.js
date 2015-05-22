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

.controller('PlaylistsCtrl', function($scope, $state, $cordovaSQLite, $cordovaPrinter, Model) {
  $scope.model = Model;
  console.log(Model);
  
 $scope.insert = function(model) {
        console.log(model);
        var query = "INSERT INTO company (name, phone, email) VALUES (?,?,?)";
        $cordovaSQLite.execute(db, query, [model.name, model.phone, model.email]).then(function(res) {
            console.log("INSERT ID test-> " + res.insertId);
        }, function (err) {
            console.log(err);
        });

        if($cordovaPrinter.isAvailable()) {
            $cordovaPrinter.print(page, 'playlists.html');
        } else {
            alert("Printing is not available on device");
        }
    }
    
  
     $scope.categories = [];
    var query2 = "SELECT id, name, phone, email FROM company";
        $cordovaSQLite.execute(db, query2, []).then(function(res) {
            if(res.rows.length > 0) {
                for(var i = 0; i < res.rows.length; i++) {
                    $scope.categories.push({id: res.rows.item(i).id, name: res.rows.item(i).name, phone: res.rows.item(i).phone, email: res.rows.item(i).email});
                }
            }
        }, function (err) {
            console.error(err);
        });  
})

.controller('MoreCtrl', function($scope, $ionicHistory, Model) {
   $scope.model = Model;
   console.log(Model);
  
});
