'use strict';

describe('App workflow for small devices', function () {

    var books, rowCount, columnCount;
    var table = '#booksTable';
    var tableRowsSelector = table + ' > tbody > tr';

    beforeEach(function () {
        browser().navigateTo('/');

        $.ajax({
            url: '/BookStoreData.json',
            dataType: 'json',
            async: false,
            success: function (data) {
                books = data;
                rowCount = books.length;
                columnCount = 5;
            }
        });
    });

    describe('Homepage', function () {
        it('should display the table correctly', function () {
            expect(element(tableRowsSelector).count()).toBe(rowCount);
            expect(element(table + ' > thead > tr > th:visible').count()).toBe(columnCount);
            expect(element(tableRowsSelector + ' > td:visible').count()).toBe(rowCount * columnCount);
            expect(element(tableRowsSelector + ':nth(1) > td:last > a > span:visible').text()).toEqual('add to cart');
        });

        it('the search should works correctly', function () {
            // ToggleButton is hidden
            expect(element('#toggleNavButton:hidden').count()).toBe(1);
            // Searchbox is visible
            expect(element('#searchBox:visible').count()).toBe(1);
            // before search the row-count should be equal books.count
            expect(element(tableRowsSelector).count()).toBe(rowCount);
            // search for 'schätz'
            input('vm.searchPattern.$').enter('schätz');
            // after search the row-count should be 1
            expect(element(tableRowsSelector).count()).toBe(1);
        });

        //it('should display the correct route', function () {


        //    function formatCurrency(total) {
        //        var neg = false;
        //        if (total < 0) {
        //            neg = true;
        //            total = Math.abs(total);
        //        }
        //        return (neg ? "-$" : '$') + parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
        //    }

        //    //for (var i = 0; i < books.length; i++) {
        //    //    expect(repeater(tableRowsSelector).row(i)).toEqual([
        //    //        books[i].isbn10,
        //    //        books[i].title,
        //    //        books[i].author,
        //    //        formatCurrency(books[i].price)
        //    //    ]);
        //    //}

        //});
    });
});