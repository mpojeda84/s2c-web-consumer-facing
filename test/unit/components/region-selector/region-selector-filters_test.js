/**
 * Created by maikel on 10/11/2014.
 */
describe('Region Selector Test', function () {
    'use strict';

    var $filter;

    beforeEach(function () {
        angular.mock.module('regionSelector');
    });

    beforeEach(inject(function (_$filter_) {
            $filter = _$filter_;
    }));

    it('should return the x part of the n parts of the array ', function () {
        var array = [1,2,3,4,5,6,7,8];
        var result = $filter('column')(array, 1, 3);
        expect(result).toEqual([1,2,3]);

        result = $filter('column')(array, 2, 3);
        expect(result).toEqual([4,5,6]);

        result = $filter('column')(array, 3, 3);
        expect(result).toEqual([7,8]);
    });
});