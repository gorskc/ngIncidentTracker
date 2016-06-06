(function() {
  "use strict";

  angular
    .module('ngIncidentTracker.incidentsCtrl',[])
    .controller("IncidentListCtrl", function($scope,$stateParams,popupService,$window,Incident) {
      $scope.incidents = Incident.query();

      $scope.deleteIncident = function(incident) {
        if (popupService.showPopup('Are you sure you want to delete this incident?')) {
          incident.$delete(function() {
            $window.location.href = '';
          });
        }
      };
    }).controller('IncidentViewController', function($scope, $stateParams, Incident) {
      $scope.incident = Incident.get({ id: $stateParams.id });
    }).controller('IncidentCreateController', function($scope, $state, $stateParams, Incident) {
      $scope.incident = new Incident();

      $scope.addIncident = function() {
        $scope.incident.$save(function() {
          $state.go('incidents');
        });
      };
    }).controller('IncidentEditController', function($scope, $state, $stateParams, Incident) {
      $scope.updateIncident = function() {
        $scope.incident.$update(function() {
          $state.go('incidents');
        });
      };

      $scope.loadIncident = function() {
        $scope.incident = Incident.get({ id: $stateParams.id });
      };

      $scope.loadIncident();
    });
})();
