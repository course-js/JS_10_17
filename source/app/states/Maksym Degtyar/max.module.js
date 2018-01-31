
'use strict';

angular

    .module('layout.max', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.max', {
            url: '/max',
            templateUrl: 'app/states/max/max.html',
            controller: 'maxController',
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