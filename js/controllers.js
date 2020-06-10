var portfolioApp = angular.module('portfolioApp',[]); 
portfolioApp.controller('GalleryListCtrl', function($scope) {
    $scope.galleries = [
    { 'title':'Korona - rastrowa',
     'category': 'Grafika rastrowa',
     'thumbnailUrl':'assets/portfolio/Korona_By_Piotr_Otta.png'
    },
    { 'title':'Logo Codilionu 1',
     'category': 'Logo',
     'thumbnailUrl':'assets/portfolio/Logo Codilion No BG - Green-Yellow.png'
    },
    { 'title':'Logo Codilionu 2',
     'category': 'Logo',
     'thumbnailUrl':'assets/portfolio/Logo Codilion_ready5.jpg'
    },
    { 'title':'Ikona do Facebooka 1',
     'category': 'Ikona',
     'thumbnailUrl':'assets/portfolio/Montaż filmów Ikona Facebook.jpg'
    },
    { 'title':'Ikona do Facebooka 2',
     'category': 'Ikona',
     'thumbnailUrl':'assets/portfolio/Twoje Logo Ikona Facebook.jpg'
    },
    { 'title':'Ikona do Facebooka 3',
     'category': 'Ikona',
     'thumbnailUrl':'assets/portfolio/Twój Awatar Ikona Facebook.jpg'
    },
    { 'title':'Ikona do Facebooka 4',
     'category': 'Ikona',
     'thumbnailUrl':'assets/portfolio/Zobacz co robimy na insta Facebook 628x628.jpg'
    },
    { 'title':'Twarz - blender',
     'category': 'Blender',
     'thumbnailUrl':'assets/portfolio/twarz_blender.png'
    },
    { 'title':'Koszulka 1',
     'category': 'Koszulka',
     'thumbnailUrl':'assets/portfolio/pomysł1.jpg'
    },
    { 'title':'Koszulka 2',
     'category': 'Koszulka',
     'thumbnailUrl':'assets/portfolio/pomysł2.jpg'
    },
    { 'title':'Koszulka 3',
     'category': 'Koszulka',
     'thumbnailUrl':'assets/portfolio/pomysł3.jpg'
    },
    { 'title':'Okładka na płytę',
     'category': 'Okładka',
     'thumbnailUrl':'assets/portfolio/Okładka.jpg'
    }
    ];
}); 
