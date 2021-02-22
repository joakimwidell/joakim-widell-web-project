var artistSearch = "";
var song = "";
var artistApiUrl = 'http://www.songsterr.com/a/ra/songs/byartists.json?artists=';
var apiData = "";
var artistURL = "http://www.songsterr.com/a/wa/artist?id=";
var songList = [];

function getInput() {
    artistSearch = document.getElementById('e-mail-log-in').value;
    //song = document.getElementById('password-log-in').value;
    if(artistSearch.indexOf(' ') !== -1) {
        artistSearch = '"' + artistSearch + '"';
    }
    document.getElementById("artist-name-id").innerHTML = artistSearch;
    return artistSearch;
}

async function getArtistURL() {
    getInput();
    artistApiUrl += artistSearch;
    const response = await fetch(artistApiUrl);
    apiData = await response.json();
    artistURL += apiData[0].artist.id;
    console.log(artistURL);
    artistApiUrl = "http://www.songsterr.com/a/ra/songs/byartists.json?artists=";
    artistURL = "http://www.songsterr.com/a/wa/artist?id=";
}

async function getSongList() {
    getInput();
    artistApiUrl += artistSearch;
    const response = await fetch(artistApiUrl);
    apiData = await response.json();
    for(var i = 1; i < apiData.length; i++) {
        songList.push(apiData[i].title);
    }
    for(var i = 0; i < songList.length; i++) {
        document.getElementById("song-list-ol-id").innerHTML += "<li id='song-list-id'>" + songList[i] + "</li><br>"; 
    }   
    artistApiUrl = "http://www.songsterr.com/a/ra/songs/byartists.json?artists=";
    
    
};

/*function writeSongList() {
    getSongList();
    console.log(songList);
    for(var i = 0; 10 > i; i++) {
        console.log(songlist[i]);
    }
    //document.getElementById("song-list-id").innerHTML += "<li>" + songList[i] + "</li>" + "<br>";
}*/



/*function setArtistURL() {
    getArtistURL();
    document.getElementById("iframe-id").src = artistURL;
    console.log(artistURL);
}*/