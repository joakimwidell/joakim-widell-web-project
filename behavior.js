var artistSearch = "";
var song = "";
var artistApiUrl = 'http://www.songsterr.com/a/ra/songs/byartists.json?artists=';
var apiData = "";
var artistURL = "http://www.songsterr.com/a/wa/artist?id=";

function getFormData() {
    artistSearch = document.getElementById('e-mail-log-in').value;
    song = document.getElementById('password-log-in').value;
    document.getElementById("test-p").innerHTML = artistSearch + " " + song;
    return artistSearch;
}

async function getArtistURL() {
    getFormData();
    artistApiUrl += artistSearch;
    const response = await fetch(artistApiUrl);
    apiData = await response.json();
    artistURL += apiData[0].artist.id;
    console.log(artistURL);
    
}

/*function parseApiData() {
    getArtist();
    var information = apiData[0].title;
    console.log(information);
}*/
