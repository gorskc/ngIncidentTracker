(function() {
  "use strict";

  angular
    .module("ngIncidentTracker.employeesCtrl",[])
    .controller("EmployeeListCtrl", function($scope,$stateParams,popupService,$window,Employee) {
      $scope.employees = Employee.query();

      $scope.deleteEmployee = function(employee) {
        if (popupService.showPopup('Are you sure you want to delete this employee?')) {
          employee.$delete(function() {
            $window.location.href = '';
          });
        }
      };
    }).controller('EmployeeViewController', function($scope, $stateParams, Employee) {
      $scope.employee = Employee.get({ id: $stateParams.id });
    }).controller('EmployeeCreateController', function($scope, $state, $stateParams, Employee) {
      $scope.employee = new Employee();

      $scope.addEmployee = function() {
        $scope.employee.$save(function() {
          $state.go('employee');
        });
      };
    }).controller('EmployeeEditController', function($scope, $state, $stateParams, Employee) {
      $scope.updateEmployee = function() {
        $scope.employee.$update(function() {
          $state.go('employee');
        });
      };

      $scope.loadEmployee = function() {
        $scope.employee = Employee.get({ id: $stateParams.id });
      };

      $scope.loadEmployee();
    });
})();
