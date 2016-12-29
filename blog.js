var blogData;
$.get("blog.xml", function (data) {
  blogData = data;
});

x = $(blogData);

var app = angular.module("app", []);
app.controller("head", function($scope) {
  $scope.title = x.find("head title").text()
});
app.controller("navbar", function($scope) {
});
app.controller("body", function($scope) {
});
