(function() {
  'use strict';



  angular.module('bookmarkApp', [
    'ui.sortable'
  ])
    .controller('BookController', function($scope) {
        $scope.bookmarks = [
          {text:'Google', link:'http://www.google.com', description: 'Google Search Engine'},
          {text:'Toggl', link:'http://www.toggl.com', description: 'Online Service Time Tracker'},
          {text:'Twitch', link:'http://www.twitch.tv', description: 'Nerds Videogame Streaming'},
        ];

        //fix error to bypass if else on page load
        $scope.bookmarkText = '';
        $scope.bookmarkLink = '';
        $scope.bookmarkDescription = 'Brief Description (500 character limit)';
        var overlay = document.getElementById('overlay');
        var addNew = document.getElementById('add-new');
        var close = document.getElementById('close');
        var require = document.getElementById('require');
        var newTaskField = document.getElementById('new-task-field');
        var newLink = document.getElementById('new-link');

        document.onkeydown = function(e) {
          if($scope.bookmarkText !== '' && e.keyCode == 13) {
            $scope.addBookmark();
          }

          if($scope.bookmarkText =='' && e.keyCode == 13) {
            require.className = '';
          }

          if(e.keyCode == 187 && overlay.className == 'hide') {
            e.preventDefault();
            require.className = 'hide';
            overlay.className = '';
            newTaskField.focus();
          }

          if(e.keyCode == 27 && overlay.className == '') {
            newTaskField.value = '';
            newLink.value = '';
            $scope.bookmarkText = '';
            $scope.bookmarkLink = '';
            $scope.bookmarkDescription = 'Brief Description (500 character limit)';
            require.className = 'hide';
            overlay.className = 'hide';
          }
        }

        addNew.addEventListener('click', function() {
          newTaskField.value = '';
          newLink.value = '';
          $scope.bookmarkText = '';
          $scope.bookmarkLink = '';
          $scope.bookmarkDescription = 'Brief Description (500 character limit)';
          overlay.className = '';
          require.className = 'hide';
          newTaskField.focus();
        });

        $scope.addBookmark = function () {
          if($scope.bookmarkText !== '') {
            $scope.bookmarks.push({text:$scope.bookmarkText, link:$scope.bookmarkLink, description:$scope.bookmarkDescription});
            $scope.bookmarkText = '';
            $scope.bookmarkLink = '';
            $scope.bookmarkDescription = 'Brief Description (500 character limit)';
            overlay.className = 'hide';
            require.className = 'hide';
          }

          else {
            require.className = '';
          }
        }
    });

//iife
}());
