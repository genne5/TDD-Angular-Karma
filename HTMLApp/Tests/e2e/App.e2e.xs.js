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
                columnCount = 2;
            }
        });
    });

    describe('Homepage', function () {
        it('should display the table correctly', function () {
            expect(element(tableRowsSelector).count()).toBe(rowCount);
            expect(element(table + ' > thead > tr > th:visible').count()).toBe(columnCount);
            expect(element(tableRowsSelector + ' > td:visible').count()).toBe(rowCount * columnCount);
            expect(element(tableRowsSelector + ':nth(1) > td:last > a > span:visible').text()).toContain('$');
        });

        it('the search should works correctly', function () { 
            // ToggleButton is visible
            expect(element('#toggleNavButton:visible').count()).toBe(1);
            // Searchbox is hidden
            expect(element('#searchBox:hidden').count()).toBe(1);
            
            // Simulate Click on ToggleButton
            element('#toggleNavButton:visible').click();
            // the Searchbox should be visible now
            expect(element('#searchBox:visible').count()).toBe(1);

            // before search the row-count should be equal books.count
            expect(element(tableRowsSelector).count()).toBe(rowCount);
            // search for 'schätz'
            input('vm.searchPattern.$').enter('schätz');
            // after search the row-count should be 1
            expect(element(tableRowsSelector).count()).toBe(1);
        });
    });
});