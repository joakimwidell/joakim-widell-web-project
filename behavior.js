var artistSearch = "";
var song = "";
var artistApiUrl = 'http://www.songsterr.com/a/ra/songs/byartists.json?artists=';


function getFormData() {
    artistSearch = document.getElementById('e-mail-log-in').value;
    song = document.getElementById('password-log-in').value;
    document.getElementById("test-p").innerHTML = artistSearch + " " + song;
    return artistSearch;
}

async function getArtist() {
    getFormData();
    artistApiUrl += artistSearch;
    const response = await fetch(artistApiUrl);
    const apiData = await response.json();
    console.log(apiData);
    
}

/*function parseApiData() {
    getArtist();
    var songId = apidata[0][0];
    console.log(songId);
}*/