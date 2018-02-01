'use strict';

angular

    .module('layout.shlyahov', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.shlyahov', {
            url: '/shlyahov',
            templateUrl: 'app/states/shlyahov/shlyahov.html',
            controller: 'shlyahovController',
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
