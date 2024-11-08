// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/Alone - Dj Valka _ Alan Walker Mashup _ (Official Music Video)(MP3_320K).mp3');
let masterPlay = document.getElementById('master-paly');
let progressBar = document.getElementById("progress-bar");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('master-song-name');
let songItems = Array.from(document.getElementsByClassName('song-item'));
let songs = [
    { songName: "Alone - Dj Valka Alan Walker", filePath: "songs/Alone - Dj Valka _ Alan Walker Mashup _ (Official Music Video)(MP3_320K).mp3", coverPath: "covers/1.jpg" },
    { songName: "Arash - Broken Angel", filePath: "songs/Arash - Broken Angel (Lyrics) Ft.Helena _I_m so lonely_ broken angel_(MP3_160K).mp3", coverPath: "covers/2.jpg" },
    { songName: "Kuruluş Osman - Yen", filePath: "songs/Kuruluş Osman Müzikleri - Yeni Çağ(MP3_320K).mp3", coverPath: "covers/3.jpg" },
    { songName: "Dopamine", filePath: "songs/Dopamine(MP3_160K).mp3", coverPath: "covers/4.jpg" },
    { songName: "Prvrln - Не с обой", filePath: "songs/Prvrln Не с тобой(MP3_160K).mp3", coverPath: "covers/5.jpg" }
];

// Update song list
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

// Handle play/pause for the master play button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Update progress bar as the song plays
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
});

// Change song progress on bar update
progressBar.addEventListener('input', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
});

// Make all play buttons functional
songItems.forEach((element, i) => {
    let songItemPlayButton = element.getElementsByClassName('song-item-icon')[0];
    songItemPlayButton.addEventListener('click', () => {
        audioElement.src = songs[i].filePath;
        masterSongName.innerText = songs[i].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    });
});
