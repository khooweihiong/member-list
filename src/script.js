var app = angular.module('app.memberList', []);

app.controller('MemberController', ['$scope', '$filter', function($scope, $filter) {
  $scope.member = {};
  $scope.memberlist = [];
    
  $scope.submit = function () {
    $scope.member.id = $scope.memberlist.length+1;
    $scope.member.date = $filter('date')(new Date(), 'dd/MM/yyyy');
    $scope.member.time = $filter('date')(new Date(), 'HH:mm:ss');
    $scope.memberlist.push($scope.member);
    $scope.member = {};
  };
    
  $scope.remove = function (id) {
    _.remove($scope.memberlist, function(n) {
                            return n.id === id;
                        });     
  };
    
}]);