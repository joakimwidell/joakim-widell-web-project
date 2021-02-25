var artistSearch = "";
var song = "";
var artistApiUrl = 'https://www.songsterr.com/a/ra/songs/byartists.json?artists=';
var apiData = "";
var artistURL = "https://www.songsterr.com/a/wa/artist?id=";
var songList = [];
var idList = [];
var artistSearchFixed = "";

function checkIfMobile() {
    
    if(window.screen.width <= 800) {
        document.getElementById("dropdown-button-about").setAttribute("href", "about-mobile.html");
        document.getElementById("dropdown-button-home").setAttribute("href", "index-mobile.html");
        document.getElementById("dropdown-button-tablature").setAttribute("href", "tablature-page-mobile.html");
        //document.getElementById("dropdown-button-log-in").setAttribute("href", "log-in-mobile.html");
    }
}

function getInput() {
    artistSearch = document.getElementById('search-artist').value;
    if(artistSearch.indexOf(' ') !== -1) {
        artistSearch = '"' + artistSearch + '"';
        artistSearchFixed = artistSearch.replace(/"|'/g, "");
    } else {
        artistSearchFixed = artistSearch;
    }
    
    document.getElementById("artist-name-id").innerHTML = artistSearchFixed;
return artistSearch;
}

function getInputMobile() {
    artistSearch = document.getElementById('search-artist-mobile').value;
    if(artistSearch.indexOf(' ') !== -1) {
        artistSearch = '"' + artistSearch + '"';
        artistSearchFixed = artistSearch.replace(/"|'/g, "");
    } else {
        artistSearchFixed = artistSearch;
    }
    
    document.getElementById("artist-name-id").innerHTML = artistSearchFixed;
return artistSearch;
}

async function getArtistURL() {
    artistApiUrl += artistSearch;
    const response = await fetch(artistApiUrl);
    apiData = await response.json();
    artistURL += apiData[0].artist.id;
    artistURL = "https://www.songsterr.com/a/wa/artist?id=";
}

async function getSongList() {
    
    getInput();
    getArtistURL();
    document.getElementById("song-list-ol-id").innerHTML = "";
    //artistApiUrl += artistSearch;
    const response = await fetch(artistApiUrl);
    apiData = await response.json();
    for(var i = 1; i < apiData.length; i++) {
        songList.push(apiData[i].title);
    } 
    for(var i = 0; i < apiData.length; i++) {
        idList.push(apiData[i].id);
    }
    for(var i = 0; i < songList.length; i++) {
        document.getElementById("song-list-ol-id").innerHTML += "<a id='link-list-id' href=https://www.songsterr.com/a/wa/song?id=" + idList[i] +  "><li id='song-list-id'>" + songList[i] + "</li></a><br>"; 
    }   
    artistApiUrl = "https://www.songsterr.com/a/ra/songs/byartists.json?artists=";
    songList = [];
    idList = [];
    window.alert("Click on a song to get the tablatures on Songsterr.com. (You will be redirected)")
};

async function getSongListMobile() {
    
    getInputMobile();
    getArtistURL();
    document.getElementById("song-list-ol-id").innerHTML = "";
    //artistApiUrl += artistSearch;
    const response = await fetch(artistApiUrl);
    apiData = await response.json();
    for(var i = 1; i < apiData.length; i++) {
        songList.push(apiData[i].title);
    } 
    for(var i = 0; i < apiData.length; i++) {
        idList.push(apiData[i].id);
    }
    for(var i = 0; i < songList.length; i++) {
        document.getElementById("song-list-ol-id").innerHTML += "<a id='link-list-id' href=https://www.songsterr.com/a/wa/song?id=" + idList[i] +  "><li id='song-list-id'>" + songList[i] + "</li></a><br>"; 
    }   
    artistApiUrl = "https://www.songsterr.com/a/ra/songs/byartists.json?artists=";
    songList = [];
    idList = [];
    window.alert("Click on a song to get the tablatures on Songsterr.com. (You will be redirected)")
};





//LEFTOVER FUNCTIONS BELOW


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