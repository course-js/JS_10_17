
'use strict';

angular

    .module('layout.dieieva', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.dieieva', {
            url: '/dieieva',
            templateUrl: 'app/states/dieieva/dieieva.html',
            controller: 'dieievaController',

            resolve: {
                // get and prepere user from root
                fromRoot: function ( user ) {
                    return {user: user, prepered: true};
                }
            }
        });
    });
