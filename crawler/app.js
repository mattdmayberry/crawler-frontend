// app.js
"use strict";
var app = angular.module('crawler',[]);

app.controller("formCtrl", function ($scope, $http) {


    /********** postData *************/
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
        var crawler_id = data_id;
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }
        $http.get('http://138.197.207.83:5000/api/results/3', config)
                .success(function (data, status, headers, config) {
                console.log(data.edges[0].id);
                var crawler_data = data;
                createGraph(crawler_data);   
        });
    };


    /********** createGraph *************/
    function createGraph(crawler_data) {
        var crawler = cytoscape({
            container: document.getElementById('crawler'),
            elements: [],
            style: [
            {
              selector: 'node',
              style: {
                shape: 'circle',
                'background-color': '#1b24d1',
              }
            }],
        });

        crawler.layout({
            name: 'circle'
        });

        for (var i = 0; i < crawler_data.edges.length; i++) {
            addToGraph(crawler_data.edges[i], crawler);
        }
        //crawler.fit();
    };


    /*********** addToGraph *************/
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

    /* function overlap(pos, size) {
    var overlap = false;
    cy.nodes(':visible').forEach(function (node) {
        var npos = node.position();
        if ((pos.x - size) < npos.x && (pos.x + size) > npos.x && (pos.y - size) < npos.y && (pos.y + size) > npos.y) {
        overlap = true;
        return false; //break
     }
  });
  return overlap; */
}
});









