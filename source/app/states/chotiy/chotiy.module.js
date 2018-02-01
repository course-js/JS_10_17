
'use strict';

angular

    .module('layout.chotiy', [

    ])

    .config(function ($stateProvider) {

        $stateProvider.state('layout.chotiy', {
            url: '/chotiy',
            templateUrl: 'app/states/chotiy/chotiy.html',
            controller: 'chotiyController',
            /**
            *
            */
            resolve: {
                // get and prepere user from root
                fromRoot: function (user) {
                    return { user: user, prepered: true };
                }
            }
        });
    });
