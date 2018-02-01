
'use strict';

angular
    /**
     * root controller
     */
    .module('jsapp.layout')

    .controller('layoutController', function ( $scope, toastr, user ) {

        var root = $scope.root = {
            user: user,
            sayNo: function ( state ) {
                toastr.error('Sorry but this state not specified by scaffolding.', state);
            },
            students: [
                {
                    name: 'Salnikov',
                    state: 'layout.salnikov',
                    image: 'https://avatars1.githubusercontent.com/u/28953211',
                }, {
                    name: 'Pipa',
                    state: 'layout.psv',
                    image: 'https://avatars0.githubusercontent.com/u/33943839?s=40&v=4',
                }, {
                    name: 'Dieieva',
                    state: 'layout.dieieva',
                    image: 'https://avatars2.githubusercontent.com/u/33932873?s=400&v=4',
                }, {
                    name: 'Chotiy',
                    state: 'layout.chotiy',
                    image: 'https://avatars1.githubusercontent.com/u/15904391',
                }, {
                    name: 'Shlyahov',
                    state: 'layout.shlyahov',
                    image: 'https://c1.staticflickr.com/9/8170/8049613589_7ce9727537.jpg',
                }
            ]
        };

    });
