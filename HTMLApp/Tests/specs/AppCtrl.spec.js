'use strict';

describe('AppCtrl', function () {
    var $q,
        $rootScope,
        $scope,
        mockDataSvc,
        getBooksDeferred,
        mockDataSvcResponse = [
  { "id": "1", "title": "Der Schwarm", "author": "Frank Schätzing", "isbn10": "3596164532", "price": 9.95 },
  { "id": "2", "title": "Das Parfum", "author": "Patrick Süskind", "isbn10": "3257228007", "price": 10.90 },
  { "id": "3", "title": "Faust. Der Tragödie Erster Teil", "author": "Johann Wolfgang Goethe", "isbn10": "3150191521", "price": 4.6 },
  { "id": "4", "title": "Homo faber: Ein Bericht", "author": "Max Frisch", "isbn10": "3518368540", "price": 8 },
  { "id": "5", "title": "Effi Briest", "author": "Theodor Fontane", "isbn10": "3150069610", "price": 4.6 }
        ];

    beforeEach(module('App'));

    beforeEach(inject(function (_$q_, _$rootScope_) {
        $q = _$q_;
        $rootScope = _$rootScope_; 
    }));

    beforeEach(inject(function ($controller) {
        $scope = $rootScope.$new();

        mockDataSvc = {
            getBooks: function () {
                getBooksDeferred = $q.defer();
                return getBooksDeferred.promise;
            }
        }

        spyOn(mockDataSvc, 'getBooks').andCallThrough();

        $controller('AppCtrl', {
            '$scope': $scope,
            'DataSvc': mockDataSvc
        });
    }));

    describe('AppCtrl initialize', function () {

        beforeEach(function () {
            getBooksDeferred.resolve(mockDataSvcResponse);
            $rootScope.$apply();
        });

        it('should query the method DataSvc.getBooks()', function () {
            expect(mockDataSvc.getBooks).toHaveBeenCalled();
        });

        it('should be filled with the mock-data', function () {
            expect($scope.vm.books.length).toBe(mockDataSvcResponse.length);
            expect($scope.vm.books[0].isbn10).toBe(mockDataSvcResponse[0].isbn10);
        });
    });
});