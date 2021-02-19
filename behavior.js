let artist = "";
async function getArtist(artist) {
    let artistApiUrl = 'https://www.songsterr.com/a/ra/songs.json?pattern=' + artist;
    const response = await fetch(artistApiUrl);
    const data = await response.json();
                
    console.log(data[0].artist.name);
    
}
