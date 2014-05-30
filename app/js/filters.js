'use strict';

/* Filters */

angular.module('myApp.filters', []).

filter('test', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

