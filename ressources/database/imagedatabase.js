
// base de donnée d'enregistrement film

const movies =[
    {
        imgSrc: require('../moviesimage/roue3.jpg'),
        title: 'Titre: Les Aventures B',
        realisateur: 'Realisateur: Antoine Baiha',
        acteur: 'Acteur: Hugor Mayambu, \n Jean Marie, \n Baba Alice',
        date: 'Date: 2011'
    },
    {
        imgSrc: require('../moviesimage/roue3.jpg'),
        title: 'Les Aventures',
        realisateur: 'Realisateur: Atoine Baiha',
        acteur: 'Acteur: Hugor Mayambu, \n Jean Marie, \n Baba Alice',
        date: '2011'
    }, 
    { imgSrc: require('../moviesimage/roue3.jpg'), 
        title:'Titre: Les Aventures ', 
        realisateur: 'Realisateur: Atoine Baiha',
        acteur: 'Acteur: Hugor Mayambu, \n Jean Marie, \n Baba Alice',
        date:'2011'
    } 
]
    export {movies}