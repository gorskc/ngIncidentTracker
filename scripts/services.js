angular.module('ngIncidentTracker.services', []).factory('Incident', function($resource) {
  return $resource('http://localhost:3000/incidents/:id',{
    update: {
      method: 'PUT'
    }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
      return $window.confirm(message);
    }
});
