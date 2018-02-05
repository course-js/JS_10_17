'use strict';

angular

    .module('layout.apaleev', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.apaleev', {
            url: '/apaleev',
            templateUrl: 'app/states/apaleev/apaleev.html',
            controller: 'apaleevController',
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
