

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
    }
]

// SETTO ARRAY DELLE TRACKS
 let numberoftracks = [];

// CICLO L'ARRAY ALBUM PER RIEMPIRE QUELLO DELLE TRACKS
albums.forEach((elem) => {

    let { tracks } = elem;
    numberoftracks.push(tracks);

})

console.log(numberoftracks)

let mintrack;

// CICLO ARRAY TRACKS
for(let i=1; i<=numberoftracks.length; i++){
    if(numberoftracks[i] < numberoftracks[i+1]) {
       mintrack = numberoftracks[i]
    }
}

console.log(mintrack)