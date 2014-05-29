'use strict';
        angular.module('App', [])
        .service('DataSvc', ['$http', '$q', function ($http, $q) {
            return {
                getBooks: function () {
                    var defer = $q.defer();
                    $http.get('BookStoreData.json').then(function (bookStoreDataResponse) {
                        defer.resolve(bookStoreDataResponse.data);
                    });
                    return defer.promise;
                }
            };
        }])
        .controller('AppCtrl', ['$scope', 'DataSvc', function ($scope, DataSvc) {
            $scope.vm = {};
            DataSvc.getBooks()
                .then(function (data) {
                    $scope.vm.books = data;
                });
        }]);