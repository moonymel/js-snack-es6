

// ------ SNACK 1

// CREO UN ARRAY DI ALBUM/EP MUSICALI CON TITOLO ALBUM/EP E NUMERO DI TRACK PERCHE' DI BICICLETTE E SQUADRE DI CALCIO NON SO PROPRIO NIENTE 

let albums = [
    {
        title: 'AM',
        tracks: 12,
    },

    {
        title: 'Be the Cowboy',
        tracks: 14,
    },
    
    {
        title: 'We Didnt Start The Fire',
        tracks: 3,
    },

    {
        title: 'Too Weird to Live, Too Rare to Die!',
        tracks: 10,
    },

    {
        title: 'One More Light Live',
        tracks: 16,
    }
]

let mintrack = albums[0];

albums.forEach((elem) => {
    if(elem.tracks < mintrack.tracks) {
        mintrack = elem;
    }

})

console.log(mintrack)

let { title, tracks } = mintrack;
let text = `L'album-ep con meno tracce è ${title} con ${tracks} tracce`;
console.log(text);





// ------ SNACK 2

// CREO UN ARRAY DI SQUADRE CHE NON ESISTONO
let teams = [
    {
        nome: 'la tomodachi',
        punti: 0,
        falli: 0,

    },

    {
        nome: 'anna oxa fc',
        punti: 0,
        falli: 0,

    },

    {
        nome: 'real hogwarts',
        punti: 0,
        falli: 0,

    },

    {
        nome: 'franchino united',
        punti: 0,
        falli: 0,

    }
]

//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const teams_updated = teams.map((elem) =>{
  
    elem.punti = Math.floor(Math.random() * 10 + 1);
    elem.falli = Math.floor(Math.random() * 10 + 1);

    return elem;

})

console.log(teams_updated)

// CREO NUOVO ARRAY CON SOLO NOMI E FALLI SUBITI
let teams_short = [];

teams.forEach((elem) => {
    let { nome, falli } = elem;
    teams_short.push(nome,falli);
})

console.log(teams_short)