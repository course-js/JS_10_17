
'use strict';

angular

    .module('layout.max')

    .controller('maxController', function ( $scope, fromRoot ) {
    	var vm = $scope.vm = {
            fromRoot: fromRoot,
            connections: [
                {
                    rank: 1,
                    logo: 'https://media4.s-nbcnews.com/j/newscms/2018_04/2305581/180125-grumpy-cat-ew-300p_07034f7f044ba195b0fa288411af8621.focal-860x430.jpg'
                },
                {
                    rank: 2,
                    logo: 'https://media2.s-nbcnews.com/i/MSNBC/Components/Video/__NEW/_Player/x_lon_grumpy_150908.jpg'
                }
            ]
        };

    });