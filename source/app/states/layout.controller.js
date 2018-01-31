
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
                    name: 'Chotiy',
                    state: 'layout.chotiy',
                    image: 'https://avatars1.githubusercontent.com/u/15904391',
                }, {
                    name: 'Unknown 2',
                    state: null,
                    image: './assets/images/unknown user.png',
                }, {
                    name: 'Unknown 3',
                    state: null,
                    image: './assets/images/unknown user.png',
                },
            ]
        };

    });
