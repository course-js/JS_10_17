
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
            }
        };

    });
