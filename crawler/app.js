// app.js

var app = angular.module('crawler',[]);

app.controller("formCtrl", function ($scope, $http) {

    $scope.sendData = function () {
       // use $.param jQuery function to serialize data from JSON 
        var data = $.param({
            url: $scope.formData.inputURL,
            keyword: $scope.formData.keyword,
            depth: $scope.formData.depth,
            searchmode: $scope.formData.searchmode
        });
    
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('http://requestb.in/oicjploi', data, config)
        .success(function (data, status, headers, config) {
            //$scope.PostDataResponse = data;
            console.log(data);
        })
        .error(function (data, status, header, config) {
            $scope.ResponseDetails = "Data: " + data +
                "<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });
    };
});
