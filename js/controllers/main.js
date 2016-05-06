(function() {

  'use strict';

  angular.module('bookmarkApp')
    .controller('BookController', function($scope, localStorageService) {

      /*
        $scope.bookmarks = [
          {text:'learn angular', done:true},
          {text:'build an angular app', done:false}
        ];
        */
        /*
        var todosInStore = localStorageService.get('bookmarks');

        $scope.todos = todosInStore || [];

        $scope.$watch('bookmarks', function () {
          localStorageService.set('bookmarks', $scope.bookmarks);
        }, true);

        $scope.addBookmark = function() {
          $scope.bookmarks.push({text:$scope.bookmarkText, done:false});
          $scope.bookmarkText = '';
        }*/
    });

}());
