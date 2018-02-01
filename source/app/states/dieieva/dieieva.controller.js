
'use strict';

angular

    .module('layout.dieieva')

    .controller('dieievaController', function ( $scope, $log, fromRoot ) {

        var vm = $scope.vm = {
            fromRoot: fromRoot,
            connections: [
                {
                    logo: 'https://covers.oreillystatic.com/images/9780596805531/cat.gif',
                    title: 'JavaScript: The Definitive Guide',
                    author:'David Flanagan',
                    text: "Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer's guide and comprehensive reference to the core language and to the client-side JavaScript APIs defined by web browsers."
                },

                {
                    logo: 'https://images-na.ssl-images-amazon.com/images/I/81sPjexfGqL.jpg',
                    title: 'Getting MEAN with Mongo, Express, Angular, and Node',
                    author:'Simon Holmes',
                    text: "Getting MEAN teaches readers how to develop web applications end-to-end using the MEAN stack. You'll systematically discover each technology in the MEAN stack as you build up an application one layer at a time, just as you'd do in a real project."
                },
                
                {
                    logo: 'https://covers.oreillystatic.com/images/9780596517748/cat.gif',
                    title: 'JavaScript: The Good Parts',
                    author:'Douglas Crockford',
                    text: "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code."
                },
            ]
        };

    });
