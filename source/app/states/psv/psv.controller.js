
'use strict';

angular

    .module('layout.psv')

    .controller('psvController', function ( $scope, $log, fromRoot ) {

        var vm = $scope.vm = {
            fromRoot: fromRoot,
            connections: [
                {
                    rank: 1,
                    name: 'The Greatest Showman',
                    logo: 'http://static.hdrezka.ag/i/2018/1/6/f6d189d4b865cno62d22f.jpg',
                    description: ' Biography, Drama, Musical ',
                    url: 'http://hdrezka.ag/films/drama/26606-velichayshiy-shoumen-2017.html'
                },
                {
                    rank: 2,
                    name: 'Thor: Ragnarok',
                    logo: 'http://static.hdrezka.ag/i/2017/10/25/j30317a6df1d1nl94t17m.jpg',
                    description: ' Action, Adventure, Comedy',
                    url: 'http://hdrezka.ag/films/action/25923-tor-ragnarek-2017.html'
                },
                {
                    rank: 3,
                    name: 'Blade Runner 2049',
                    description: 'Drama, Mystery, Sci-Fi ',
                    url: 'http://hdrezka.ag/films/fiction/24952-beguschiy-po-lezviyu-2049-2017.html',
                    logo: 'http://static.hdrezka.ag/i/2017/10/7/h437942751aafbp16v25j.jpg',
                },
                {
                    rank: 4,
                    name: 'Guardians of the Galaxy Vol. 2',
                    description: ' Action, Adventure, Sci-Fi',
                    url: 'http://hdrezka.ag/films/fiction/22867-strazhi-galaktiki-2-2017.html',
                    logo: 'http://static.hdrezka.ag/i/2017/4/20/ydb6d1efd08c1nw90g76f.jpg',
                },
                {
                    rank: 5,
                    name: 'Logan',
                    description: ' Action, Drama, Sci-Fi',
                    url: 'http://hdrezka.ag/films/fiction/22865-logan-2017.html',
                    logo: 'http://static.hdrezka.ag/i/2017/5/16/hcb3c2f23ee41ky52g83x.jpg',
                },
                {
                    rank: 6,
                    name: 'King Arthur: Legend of the Sword',
                    description: 'Action, Adventure, Drama',
                    url: 'http://hdrezka.ag/films/fantasy/17831-mech-korolya-artura.html',
                    logo: 'http://static.hdrezka.ag/i/2017/4/22/p7769eeb98efeps21c85c.jpg',
                },
                {
                    rank: 7,
                    name: 'Star Wars: The Last Jedi',
                    description: 'Action, Adventure, Fantasy',
                    url: 'http://hdrezka.ag/films/fantasy/26382-zvezdnye-voyny-poslednie-dzhedai-2017.html',
                    logo: 'http://static.hdrezka.ag/i/2017/12/14/p2d96d918482cov85g43r.jpg',
                },
                {
                    rank: 8,
                    name: 'John Wick: Chapter Two',
                    description: ' Action, Crime, Thriller',
                    url: 'http://hdrezka.ag/films/action/23576-dzhon-uik2.html',
                    logo: 'http://static.hdrezka.ag/i/2017/2/11/b023757f3c77fhb59q59s.jpg',
                },
                {
                    rank: 9,
                    name: 'The Hitman`s Bodyguard',
                    description: ' Action, Comedy, Thriller',
                    url: 'http://hdrezka.ag/films/action/24675-telohranitel-killera-2017.html',
                    logo: 'http://static.hdrezka.ag/i/2017/5/12/i174656d8f846nx92b57x.jpg',
                },
                {
                    rank: 10,
                    name: 'Wonder Woman',
                    description: ' Action, Adventure, Fantasy',
                    url: 'http://hdrezka.ag/films/action/17498-chudo-zhenschina-2017.html',
                    logo: 'http://static.hdrezka.ag/i/2017/6/21/p06115b021947tr10o22z.jpg',
                },
                {
                    rank: 11,
                    name: 'Valerian',
                    description: ' Action, Adventure, Fantasy ',
                    url: 'http://hdrezka.ag/films/fiction/23415-valerian-i-gorod-tysyachi-planet-2017.html',
                    logo: 'http://static.hdrezka.ag/i/2017/8/11/e7daf4502c07duk37n17y.jpg',
                },
                {
                    rank: 12,
                    name: 'Bright',
                    description: 'Action, Crime, Fantasy',
                    url: 'http://hdrezka.ag/films/action/26386-yarkost-2017.html',
                    logo: 'http://static.hdrezka.ag/i/2017/12/14/i6b3facdd3d4ckl33l76m.jpg',
                },
                {
                    rank: 13,
                    name: 'Justice League',
                    description: 'Action, Adventure, Fantasy ',
                    url: 'http://hdrezka.ag/films/action/22866-liga-spravedlivosti-2017.html',
                    logo: 'http://static.hdrezka.ag/i/2017/11/26/e42020c3fa7e7ww52h60k.jpg',
                },
                {
                    rank: 14,
                    name: 'Kong: Skull Island',
                    description: 'Action, Adventure, Fantasy',
                    url: 'http://hdrezka.ag/films/fiction/17778-kong-ostrov-cherepa.html',
                    logo: 'http://static.hdrezka.ag/i/2017/3/20/j33245a4bb711dt49e82y.jpg',
                },
                {
                    rank: 15,
                    name: 'The Fate of the Furious',
                    description: 'Action, Crime, Thriller',
                    url: 'http://hdrezka.ag/films/action/24204-forsazh-8-2017.html',
                    logo: 'http://static.hdrezka.ag/i/2017/3/25/daba886e1a5fear81m28b.jpg',
                },
                {
                    rank: 16,
                    name: 'Baywatch',
                    description: 'Action, Comedy, Crime',
                    url: 'http://hdrezka.ag/films/action/24210-spasateli-malibu-2017.html',
                    logo: 'http://static.hdrezka.ag/i/2017/8/15/ea5a10da21c55sh16l18x.jpg',
                },
                {
                    rank: 17,
                    name: 'Transformers: The Last Knight',
                    description: 'Action, Adventure, Sci-Fi',
                    url: 'http://hdrezka.ag/films/fiction/24754-transformery-posledniy-rycar-2017.html',
                    logo: 'http://static.hdrezka.ag/i/2017/5/20/qf872afad6d0dqe96c46d.jpg',
                },
                {
                    rank: 18,
                    name: 'Beauty and the Beast',
                    description: 'Family, Fantasy, Musical',
                    url: 'http://hdrezka.ag/films/fantasy/14641-krasavica-i-chudovische.html',
                    logo: 'http://static.hdrezka.ag/i/2017/4/23/s2f6a594b35caho32e94u.jpg',
                },
                {
                    rank: 19,
                    name: 'Kingsman: The Golden Circle',
                    description: 'Action, Adventure, Comedy',
                    url: 'http://hdrezka.ag/films/action/25661-kingsman-zolotoe-kolco-2017.html',
                    logo: 'http://static.hdrezka.ag/i/2017/9/15/xd425e79ca2e9fm77r17f.jpg',
                },
            ]
        };

    });
