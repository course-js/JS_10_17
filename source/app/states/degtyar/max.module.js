
'use strict';

angular

    .module('layout.max', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.max', {
            url: '/max',
            controller: 'maxController',
            templateUrl: 'app/states/degtyar/max.html',
        });
    });
