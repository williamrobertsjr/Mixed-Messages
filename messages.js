// set up songs array
const songs = [
    {
        id: 1,
        track: "Everything in it's Right Place",
        album: "Kid A"

    },
    {
        id: 2,
        track: "Pyramid Song",
        album: "Amnesiac"
    },
    {
        id: 3,
        track: "Decks Dark",
        album: "A Moon Shaped Pool"
    },
    {
        id: 4,
        track: "Airbag",
        album: "Ok Computer"
    },
    {
        id: 5,
        track: "A Punch Up at a Wedding",
        album: "Hail to the Thief"
    },
    {
        id: 6,
        track: "Planet Telex",
        album: "The Bends"
    },
    {
        id: 7,
        track: "Paranoid Android",
        album: "Ok Computer"
    },
    {
        id: 8,
        track: "Idioteque",
        album: "Kid A"
    },
    {
        id: 9,
        track: "You and Whose Army?",
        album: "Amnesiac"
    },
    {
        id: 10,
        track: "Codex",
        album: "King of Limbs"
    },
    {
        id: 11,
        track: "Jigsaw Falling Into Place",
        album: "In Rainbows"
    },
    {
        id: 12,
        track: "Weird Fishes/ Apeggi",
        album: "In Rainbows"
    },
    {
        id: 13,
        track: "The National Anthem",
        album: "Kid A"
    },
    {
        id: 14,
        track: "Karma Police",
        album: "Ok Computer"
    },
    {
        id: 15,
        track: "Burn the Witch",
        album: "A Moon Shaped Pool"
    },
    {
        id: 16,
        track: "Just",
        album: "The Bends"
    },
    {
        id: 17,
        track: "The Bends",
        album: "The Bends"
    },
    {
        id: 18,
        track: "Sit Down. Stand Up.",
        album: "Hail to the Thief"
    },
    {
        id: 19,
        track: "Lotus Flower",
        album: "King of Limbs"
    },
    {
        id: 20,
        track: "Packt Like Sardines in a Crushd Tin Box",
        album: "Amnesiac"
    }
]



const songButton = document.getElementById('song-btn')
const results = document.getElementById('results')
const trackDiv = document.getElementById('track')
const albumDiv = document.getElementById('album')
const coverDiv = document.getElementById('cover')

songButton.addEventListener('click', function(e) {
    // store random number to be used as seletor for random track,album from array
    let randomNum = Math.floor(Math.random() * 21)
    let track = songs[randomNum].track
    let album = songs[randomNum].album
    let albumPic
    console.log(album)
    // if or switch case to determine what album cover is shown
    switch(album) {
        case 'The Bends':
            albumPic = 'the_bends';
            break; 
        case 'Ok Computer':
            albumPic = 'ok_computer';
            break;
        case 'Kid A':
            albumPic = 'kid_a';
            break;   
        case 'Amnesiac':
            albumPic = 'amnesiac';
            break;
        case 'Hail to the Thief':
            albumPic = 'hail_to_the_thief';
            break;
        case 'In Rainbows':
            albumPic = 'in_rainbows';
            break;
        case 'King of Limbs':
            albumPic = 'king_of_limbs';
            break;
        case 'A Moon Shaped Pool':
            albumPic = 'a_moon_shaped_pool';
            break;  
        default: 
            albumPic = 'none'
            break;
    }


    // When user clicks display new song and album cover
    trackDiv.innerHTML = `<h2>${track}</h2>`
    albumDiv.innerHTML = `<h2>${album}</h2>`
    coverDiv.innerHTML = `<img src="/images/${albumPic}.jpeg" />`
    // results.innerHTML = songs[0].track
})
