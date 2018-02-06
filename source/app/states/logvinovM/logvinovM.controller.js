'use strict';

angular

    .module('layout.logvinovM')

    .controller('logvinovMController', function ( $scope, $log, fromRoot ) {

        var vm = $scope.vm = {
            fromRoot: fromRoot,
            connections: [
                {
                    rank: 1,
                    logo: 'https://pp.userapi.com/c834303/v834303564/5fcca/1Te-up3TWQI.jpg',
                    title: 'Geralt: the witcher',
                    author:'Andjei Sapkovsky',
                    text: "Evil is always evil. And if your are between a choice of evil and less evil it`s better not to chose at all.  "
                },

                {
                    rank: 2,
                    logo: 'https://pp.userapi.com/c841124/v841124784/18f24/v2y_3-cQUqw.jpg',
                    title: 'Advertisment',
                    author:'CDproject',
                    text: "A discount on the Witcher.Don`t lose your chance"
                },
                
                {
                    rank: 3,
                    logo: 'https://pp.userapi.com/c636528/v636528209/4829b/M1riPpJpgdc.jpg',
                    title: 'Triss',
                    author:'CDproject',
                    text: "One of the most powerfull wizards in Witcher/"
                },
            ]
        };

    });
    
    