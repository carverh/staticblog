var blogData;
$.get("blog.xml", function (data) {
  blogData = data;
});

var app = angular.module("app", []);
app.controller("head", function($scope) {
  $scope.title = $(blogData).find("head title").text();
});
app.controller("navbar", function($scope) {
});
app.controller("body", function($scope) {
});
