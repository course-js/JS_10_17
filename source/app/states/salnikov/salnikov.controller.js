
'use strict';

angular

    .module('layout.salnikov')

    .controller('salnikovController', function ( $scope, $log, fromRoot ) {

        var vm = $scope.vm = {
            fromRoot: fromRoot,
            connections: [
                {
                    rank: 1,
                    name: 'first',
                    logo: 'http://via.placeholder.com/350x150',
                    alt: 'img',
                    ttl: '1111',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat, similique velit.'
                },
                {
                    rank: 2,
                    name: 'second',
                    logo: 'http://via.placeholder.com/350x150',
                    alt: 'img',
                    ttl: '22222',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat, similique velit.'
                },
                {
                    rank: 3,
                    name: 'third',
                    logo: 'http://via.placeholder.com/350x150',
                    alt: 'img',
                    ttl: '333333',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat, similique velit.'
                },
                {
                    rank: 4,
                    name: 'fourth',
                    logo: 'http://via.placeholder.com/350x150',
                    alt: 'img',
                    ttl: '4444444',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat, similique velit.'
                },
            ]
        };

        var nn = $scope.nn = {
            fromRoot: fromRoot,
            connections: [
                {
                    rank: 1,
                    name: 'first',
                    logo: 'http://via.placeholder.com/350x150',
                    alt: 'img',
                    ttl: '1',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat, similique velit.'
                },
                {
                    rank: 2,
                    name: 'second',
                    logo: 'http://via.placeholder.com/350x150',
                    alt: 'Fanta',
                    ttl: '2',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat, similique velit.'
                },
                {
                    rank: 3,
                    name: 'third',
                    logo: 'http://via.placeholder.com/350x150',
                    alt: 'img',
                    ttl: '3',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat, similique velit.'
                },
                {
                    rank: 4,
                    name: 'fourth',
                    logo: 'http://via.placeholder.com/350x150',
                    alt: 'img',
                    ttl: '4',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat, similique velit.'
                },
            ]
        };
    });
