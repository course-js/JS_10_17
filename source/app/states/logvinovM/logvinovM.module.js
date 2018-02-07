
'use strict';

angular

    .module('layout.logvinovM', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.logvinovM', {
            url: '/logvinovM',
            templateUrl: 'app/states/logvinovM/logvinovM.html',
            controller: 'logvinovMController',
           
            resolve: {
                // get and prepere user from root
                fromRoot: function ( user ) {
                    return {user: user, prepered: true};
                }
            }
        });
    });
    