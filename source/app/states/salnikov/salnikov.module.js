
'use strict';

angular

    .module('layout.salnikov', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.salnikov', {
            url: '/salnikov',
            templateUrl: 'app/states/salnikov/salnikov.html',
            controller: 'salnikovController',
            /**
            *
            */
            resolve: {
                // get and prepere user from root
                fromRoot: function ( user ) {
                    return {user: user, prepered: true};
                }
            }
        });
    });
