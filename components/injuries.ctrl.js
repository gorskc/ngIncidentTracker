(function() {
  "use strict";

  angular
    .module("ngIncidentTracker.injuriesCtrl",[])
    .controller("InjuryListCtrl", function($scope,$stateParams,popupService,$window,Injury) {
      $scope.injuries = Injury.query();

      $scope.deleteInjury = function(injury) {
        if (popupService.showPopup('Are you sure you want to delete this injury?')) {
          incident.$delete(function() {
            $window.location.href = '';
          });
        }
      };
    }).controller('InjuryViewController', function($scope, $stateParams, Injury) {
      $scope.injury = Injury.get({ id: $stateParams.id });
    }).controller('InjuryCreateController', function($scope, $state, $stateParams, Injury) {
      $scope.injury = new Injury();

      $scope.addInjury = function() {
        $scope.injury.$save(function() {
          $state.go('injuries');
        });
      };
    }).controller('InjuryEditController', function($scope, $state, $stateParams, Injury) {
      $scope.updateInjury = function() {
        $scope.injury.$update(function() {
          $state.go('injuries');
        });
      };

      $scope.loadInjury = function() {
        $scope.injury = Injury.get({ id: $stateParams.id });
      };

      $scope.loadInjury();
    });
})();
