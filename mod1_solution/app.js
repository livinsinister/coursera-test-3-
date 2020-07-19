( function() {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.items = '';
    $scope.message = '';
    $scope.checking = false;

    $scope.checkLunch = function() {
      if($scope.items.trim().length === 0) {
        $scope.empty = true;
      }  else {
        $scope.checking = true;
        $scope.empty = false;
        var arrayItems = $scope.items.split(',');
        var arrayItemsWithoutEmptys = arrayItems.filter(function(s) {
                    return s.trim() !== '';
                });

        if (arrayItemsWithoutEmptys.length <= 3) {
              $scope.message = 'Enjoy!';
        } else {
              $scope.message = 'Too much!';
        }
      }
    };
  }

}) ();
