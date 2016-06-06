angular.module("ngIncidentTracker",["ui.router","ngResource","ngIncidentTracker.incidentsCtrl",
  "ngIncidentTracker.services"]);

angular.module("ngIncidentTracker").config(function($stateProvider,$httpProvider){
    $stateProvider.state("incidents",{
        url:"/incidents",
        templateUrl:"partials/incidents/incidents.html",
        controller:"IncidentListCtrl"
    }).state('viewIncident', {
      url: '/incidents/:id/view',
      templateUrl: 'partials/incidents/incident-view.html',
      controller: 'IncidentViewCtrl'
    }).state('newIncident', {
      url: '/incidents/new',
      templateUrl: 'partials/incidents/incident-add.html',
      controller: 'IncidentCreateCtrl'
    }).state('editIncident', {
      url: '/incidents/:id/edit',
      templateUrl: 'partials/incidents/incident-edit.html',
      controller: 'IncidentEditCtrl'
    });
}).run(function($state){
   $state.go("incidents");
});
