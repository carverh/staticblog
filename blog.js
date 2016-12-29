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
  $scope.navitems = [];
  $(blogData).find("navbar items item").each(function (a, b) {
    $scope.navitems.push({name: $(this).find("name").text(), url: $(this).find("url").text()});
  });
});

app.controller("body", function($scope) {
  var showdown  = require('showdown'),
    converter = new showdown.Converter();
  $scope.posts = [];
  $(blogData).find("posts post").each(function (a, b) {
    $scope.posts.push({id: $(this).find("id").text(), title: $(this).find("title").text(), body: converter.makeHtml($(this).find("body").text()), author: $(this).find("author").text(), tags: $(this).find("tags").text().split(',')});
  });
});
