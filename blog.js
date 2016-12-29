var blogData;

$.get("blog.xml", function (data) {
  blogData = data;
});

var app = angular.module("app", []);

app.controller("head", function($scope) {
  $scope.title = $(blogData).find("head title").text();
  $scope.author = $(blogData).find("head author").text();
  $scope.description = $(blogData).find("head description").text();
  $scope.copyright = $(blogData).find("head copyright").text();
});

app.controller("navbar", function($scope) {
  $scope.title = $(blogData).find("navbar title").text();
  $scope.items = []
  $(blogData).find("navbar items item").each(function (a, b) {
    $scope.navitems.push({name: $(this).find("name").text(), url: $(this).find("url").text()});
  });
});

app.controller("body", function($scope) {
});
