
'use strict';

angular

    .module('layout.psv', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.psv', {
            url: '/psv',
            templateUrl: 'app/states/psv/psv.html',
            controller: 'psvController',
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
