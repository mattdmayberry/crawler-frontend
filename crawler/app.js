// app.js
"use strict";

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function addToCookie(cvalue) {
    var items=getCookie("searches");
    items = JSON.parse(items);
    var alreadyThere = false;
    for(var i = 0; i < items.data.length; i++) {
        if(items.data[i]==cvalue){
            alreadyThere = true;
        }
    }
    if (!alreadyThere) {
        items.data.push(cvalue);
    }
    items = JSON.stringify(items);
    setCookie("searches", items, 30);

}

function checkCookie() {
    var search=getCookie("searches");
    if (search == "") {
        setCookie("searches", '{"data":[]}', 30);
    }
}

checkCookie();

function popPrevDropdown() {
    var select = document.getElementById("selectNumber");
    var options = getCookie("searches");
    options = JSON.parse(options);
    options = options.data;
    for(var i = 0; i < options.length; i++) {
        document.getElementById("prevForm").style.display = "inline";
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

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
        addToCookie(data.url);
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }

        $http.post('http://138.197.207.83:5000/api/requests', data, config)
        .success(function (data, status, headers, config) {
            $scope.ResponseDetails = data;
            console.log(data);
            console.log(data.id);
            var data_id = data.id;   
            var row_ctr = 0;
            getData(data_id, row_ctr);

        })
        .error(function (data, status, header, config) {
            $scope.ResponseDetails = "Data: " + data +
                "<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });
    };


    /************ getData ************/
    function getData(data_id, row_ctr) {
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }

        wait(5000);
        $http.get('http://138.197.207.83:5000/api/results/' + data_id + '/rows', config)
                .success(function (data, status, headers, config) {
                if (data && row_ctr == 0) {
                    $http.get('http://138.197.207.83:5000/api/results/' + data_id, config)
                        .success(function (data, status, headers, config) {
                        createGraph(data);   
                    });
                } else if (data && row_ctr > 0 && row_ctr < data.rows + 1000) {
                    row_rqst = row_ctr + 1000;
                    getDataSection(data_id, row_rqst);
                    getData(data_id, row_rqst);
                } else {
                    row_rqst = data.rows;
                    getDataSection(data_id, row_rqst);
                }
        });       
    };


    /************ getDataSection ************/
    function getDataSection(data_id, row_rqst) {
        $http.get('http://138.197.207.83:5000/api/results/' + data_id + '/' + row_rqst, config)
                .success(function (data, status, headers, config) {
                if (data) {
                    createGraph(data); 
                } else {
                    wait(10000);
                    getDataSection(data_id, row_rqst);
                }  
            });
    }

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

        for (var i = 0; i < crawler_data.edges.length; i++) {
            addToGraph(crawler_data.edges[i], crawler);
        }  

        crawler.layout({
            name: 'circle'
        });  
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


    /*********** wait *************/
    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
            end = new Date().getTime();
      }
    }

});
    
