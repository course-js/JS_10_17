'use strict';

angular

    .module('layout.shlyahov')

    .controller('shlyahovController', function ( $scope, $log, fromRoot ) {

        var vm = $scope.idim = {
            fromRoot: fromRoot,
            connections: [
                {
                    rank: 1,
                    name: 'We have some problems',
                    logo: 'http://s019.radikal.ru/i618/1309/84/67405fbd33b3.jpg',
                    description: 'when you have many code experience - this problem will gone',
                    url: 'https://learn.javascript.ru/'
                },
                {
                    rank: 2,
                    name: 'password ',
                    logo: 'https://i.imgur.com/7qvbVLl.jpg',
                    description: 'Nice help',
                    url: 'https://gulp.readme.io/docshttps://habrahabr.ru/company/ruvds/blog/347530/'
                }
            ]
        };
    });
