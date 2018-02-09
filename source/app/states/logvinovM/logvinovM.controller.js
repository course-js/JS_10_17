'use strict';

angular

    .module('layout.logvinovM')

    .controller('logvinovMController', function ( $scope, $log, fromRoot ) {

        var vm = $scope.vm = {
            fromRoot: fromRoot,
            connections: [
                {
                    rank: 1,
                    logo: 'https://pp.userapi.com/c540105/v540105696/20fc5/762nZsMCMk4.jpg',
                    title: 'Geralt',
                    author:'witcher',
                    text: "Geralt of Rivia is a witcher and the main protagonist of the Witcher series by Andrzej Sapkowski and its adaptations, including The Witcher (PC), The Witcher 2: Assassins of Kings, and The Witcher 3: Wild Hunt video games. Like all witchers, Geralt is a monster hunter for hire. He possesses superhuman abilities and is a master swordsman. During the Trial of the Grasses, Geralt exhibited unusual tolerance for the mutagens that grant witchers their abilities. Accordingly, Geralt was subjected to further experimental mutagens which rendered his hair white and may have given him greater speed, strength, and stamina than his fellow witchers."
                },

                {
                    rank: 2,
                    logo: 'https://pp.userapi.com/c540105/v540105696/20fad/tDkoHYWdh40.jpg',
                    title: 'Yennefer',
                    author:'wizard',
                    text: "Yennefer (born on Belleteyn of the year 1173) was a sorceress who lived in Vengerberg, the capital city of Aedirn. She was the youngest member of the Brotherhood of Sorcerers and later the Lodge of Sorceresses attempted to recruit her. She was Geralt of Rivia's true love and a mother figure to Ciri, a former royal advisor to king Demavend of Aedirn, and a close friend of Triss Merigold."
                },
                
                {
                    rank: 3,
                    logo: 'https://pp.userapi.com/c540105/v540105696/20fa5/fZQ43DHSVTg.jpg',
                    title: 'Triss',
                    author:'wizard',
                    text: "Triss Merigold of Maribor was a legendary Temerian sorceress of the 13th century. Called Fourteenth of the Hill by her contemporaries because she was erroneously thought to have been killed during the Battle of Sodden Hill, she passed into history as Merigold the Fearless. A member of King Foltest's royal council along with Fercart and Keira Metz, as well as a founding member of the Lodge of Sorceresses, she was involved in politics for most of her life."
                },

                {
                    rank: 4,
                    logo: 'https://pp.userapi.com/c540105/v540105696/20f95/wPWmQExs2VU.jpg',
                    title: 'Dandelion',
                    author:'bard',
                    text: "Julian Alfred Pankratz, better known as Dandelion, was a poet, minstrel, bard, and close friend of Geralt of Rivia."
                },

                {
                    rank: 5,
                    logo: 'https://pp.userapi.com/c540105/v540105696/20f6e/ootq_yj_8Zo.jpg',
                    title: 'Zoltan',
                    author:'warrior',
                    text: "Zoltan Chivay is a dwarf, veteran of the Second Nilfgaard War, and a friend of Geralt. They first met when Geralt and his company were going towards the Yaruga river from Brokilon, but the dwarf advised them to join his company and go eastwards. It is from Zoltan that Geralt got his sword — Sihil."
                },

                {
                    rank: 6,
                    logo: 'https://pp.userapi.com/c540105/v540105696/20ee6/d_7e2Q4UmYo.jpg',
                    title: 'Priscilla',
                    author:'bard',
                    text: "Priscilla was a romantic poet, who went by the stage name. She was a very close friend of Dandelion and her triumphal tour of concerts had taken her from Pont Vanis and Lan Exeter in Kovir and Poviss, through Tretogor (capital of Redania), and Caelf to Novigrad, the biggest city in the Northern Kingdoms. She also played gwent with a Scoia'tael deck in her free time, but only for fun, not crowns."
                },
            ]
        };

    });
       
