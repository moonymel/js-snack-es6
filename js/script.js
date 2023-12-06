

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

let mintrack = 99;

albums.forEach((elem) => {
    if(elem.tracks < mintrack) {
        mintrack = elem.tracks;
        let { title, tracks } = elem;
        console.log(elem)
    }

})

console.log(mintrack)


// // SETTO ARRAY DELLE TRACKS
//  let numberoftracks = [];

// // CICLO L'ARRAY ALBUM PER RIEMPIRE QUELLO DELLE TRACKS
// albums.forEach((elem) => {

//     let { tracks } = elem;
//     numberoftracks.push(tracks);

// })

// console.log(numberoftracks)

// let mintrack;

// // CICLO ARRAY TRACKS
// for(let i=1; i<=numberoftracks.length; i++){
//     if(numberoftracks[i] < numberoftracks[i+1]) {
//        mintrack = numberoftracks[i]
//     }
// }

// console.log(mintrack)




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