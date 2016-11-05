// app.js

var app = angular.module('crawler',[]);

app.controller("formCtrl", function ($scope, $http) {

    /************ postData ***************/
    $scope.postData = function () {
        var data = {
            url: $scope.formData.inputURL,
            keyword: $scope.formData.keyword,
            depth: $scope.formData.depth,
            searchmode: $scope.formData.searchmode
        };
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }

        $http.post('http://138.197.207.83:5000/api/requests', data, config)
        .success(function (data, status, headers, config) {
            console.log(data);
            console.log(data.id);
            var data_id = data.id;   
            getData(data_id);
        })
        .error(function (data, status, header, config) {
            $scope.ResponseDetails = "Data: " + data +
                "<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });
    };

    /************ getData ***************/
    function getData(data_id) {
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }
        $http.get('http://138.197.207.83:5000/api/results/' + data_id, config)
                .success(function (data, status, headers, config) {
                console.log(data.edges[0].id);
                createGraph(data);   
        });
    };

    /************ graphHelper ***************/
    function createGraph(data) {
        var crawler = cytoscape({
        container: document.getElementById('crawler'),
        elements: [],
        style: [
            {
                selector: 'node',
                style: {
                shape: 'circle',
                'background-color': '#1b24d1',
                label: 'data(id)'
              }
            }]
        });

        for (var i = 0; i < data.edges.length; i++) {
            addToGraph(data.edges[i], crawler);
        }

        crawler.layout({
            name: 'circle'
        });
    };


    /************ addToGraph ***************/
    function addToGraph(linkIn, graphIn) {
      if ((graphIn.getElementById(linkIn.src_url)).length == 0) {
        graphIn.add({
            data: { id: linkIn.src_url }
          }
        );
      }
      if ((graphIn.getElementById(linkIn.dst_url)).length == 0) {
        graphIn.add({
            data: { id: linkIn.dst_url }
          }
        );
      }
      var source = linkIn.src_url;
      graphIn.add({
        data: {
          id: linkIn.id,
          source: source,
          target: (linkIn.dst_url)
        }
      });
    };
});


