let popularSongsLeft = document.getElementById("popularSongsLeft");
let popularSongsRight = document.getElementById("popularSongsRight");
let popSongsName = document.querySelector(".pop-songs-name");

popularSongsRight.addEventListener('click', () => {
    popSongsName.scrollLeft += 330;
});

popularSongsLeft.addEventListener('click', () => {
    popSongsName.scrollLeft -= 330;
});

let popularArtistsLeft = document.getElementById("popularArtistsLeft");
let popularArtistsRight = document.getElementById("popularArtistsRight");
let artistsItem = document.querySelector(".artists-items");

popularArtistsRight.addEventListener('click', () => {
    artistsItem.scrollLeft += 530;
});

popularArtistsLeft.addEventListener('click', () => {
   artistsItem.scrollLeft -= 330;
});

const artist = [
    {
        id: 1,
        artistImage: "/assest/images/artist-image-1.jpg"
    },
    {
        id: 2,
        artistImage: "/assest/images/artist-image-2.jpg"
    },
    {
        id: 3,
        artistImage: "/assest/images/artist-image-3.jpg"
    },
    {
        id: 4,
        artistImage: "/assest/images/artist-image-4.jpg"
    },
    {
        id: 5,
        artistImage: "/assest/images/artist-image-5.jpg"
    },
    {
        id: 6,
        artistImage: "/assest/images/artist-image-6.jpg"
    },
    {
        id: 7,
        artistImage: "/assest/images/artist-image-7.jpg"
    },
    {
        id: 8,
        artistImage: "/assest/images/artist-image-8.jpg"
    },
    {
        id: 9,
        artistImage: "/assest/images/artist-image-9.jpg"
    },
    {
        id: 10,
        artistImage: "/assest/images/artist-image-10.jpg"
    },
    {
        id: 11,
        artistImage: "/assest/images/artist-image-11.jpeg"
    },
    {
        id: 12,
        artistImage: "/assest/images/artist-image-12.jpg"
    },
    {
        id: 13,
        artistImage: "/assest/images/artist-image-13.jpg"
    },
];

Array.from(document.getElementsByClassName('art-item-1')).forEach((e, i)=> {
    e.getElementsByTagName("img")[0].src = artist[i].artistImage;
});

const music = new Audio("/assest/audios/audio-1.mp3");
// music.play();

const songs = [
    {
        id: 1,
        songNames: `<h5>khairiyat <br> <div class="subtitle">Arjit Singh</div></h5>`,
        poster: "/assest/images/song-1.jpg"
    },
    {
        id: 2,
        songNames: `<h5>khamoshiyan <br> <div class="subtitle">Arjit Singh</div></h5>`,
        poster: "/assest/images/song-2.jpg"
    },
    {
        id: 3,
        songNames: `<h5>Ve kamleya <br> <div class="subtitle">Arjit Singh</div></h5>`,
        poster: "/assest/images/song-3.jpg"
    },
    {
        id: 4,
        songNames: `<h5>O Maahi <br> <div class="subtitle">Arjit Singh</div></h5>`,
        poster: "/assest/images/song-4.jpg"
    },
    {
        id: 5,
        songNames: `<h5>zaalima <br> <div class="subtitle">Arjit Singh</div></h5>`,
        poster: "/assest/images/song-5.jpg"
    },
    {
        id: 6,
        songNames: `<h5>Noor-e-Khuda <br> <div class="subtitle">Adnan sami,Shreya Ghoshal</div></h5>`,
        poster: "/assest/images/song-6.jpg"
    },
    {
        id: 7,
        songNames: `<h5>pehla pyaar <br> <div class="subtitle">Armaan Malik</div></h5>`,
        poster: "/assest/images/song-7.jpg"
    },
    {
        id: 8,
        songNames: `<h5>Ghar Se Nikalta Hi<br> <div class="subtitle">Armaan Malik</div></h5>`,
        poster: "/assest/images/song-8.jpg"
    },
    {
        id: 9,
        songNames: `<h5>sab tera <br> <div class="subtitle">Armaan Malik</div></h5>`,
        poster: "/assest/images/song-9.jpg"
    },
    {
        id: 10,
        songNames: `<h5>sang e mah <br> <div class="subtitle">Atif Aslam</div></h5>`,
        poster: "/assest/images/song-10.jpg"
    },
    {
        id: 11,
        songNames: `<h5>Dil meri na sune <br> <div class="subtitle">Atif aslam</div></h5>`,
        poster: "/assest/images/song-11.jpg"
    },
    {
        id: 12,
        songNames: `<h5>main rung sharbaton ka <br> <div class="subtitle">Atif Aslam</div></h5>`,
        poster: "/assest/images/song-12.jpg"
    },
    {
        id: 13,
        songNames: `<h5>gumaan <br> <div class="subtitle">Talha Anjum|Talhah Yonus</div></h5>`,
        poster: "/assest/images/song-13.jpg"
    },
    {
        id: 14,
        songNames: `<h5>Open Letter <br> <div class="subtitle">Talha Anjum</div></h5>`,
        poster: "/assest/images/song-14.webp"
    },
    {
        id: 15,
        songNames: `<h5>Shikayat <br> <div class="subtitle">AUR Raffey|Usama|Ahad</div></h5>`,
        poster: "/assest/images/song-15.jpg"
    },
    {
        id: 16,
        songNames: `<h5>Sajni <br> <div class="subtitle">Arjit Singh,Ram Sampath</div></h5>`,
        poster: "/assest/images/song-16.jpg"
    },
    {
        id: 17,
        songNames: `<h5>Afsanay <br> <div class="subtitle">Talha Anjum|Talhah Yonus</div></h5>`,
        poster: "/assest/images/song-17.jpg"
    },
    {
        id: 18,
        songNames: `<h5>Mile ho tum humko <br> <div class="subtitle">Neha kakkar| Tony Kakkar</div></h5>`,
        poster: "/assest/images/song-18.jpg"
    },
    {
        id: 19,
        songNames: `<h5>ilahi <br> <div class="subtitle">Ranbir Kapoor,Deepika Padukone</div></h5>`,
        poster: "/assest/images/song-19.jpg"
    },
    {
        id: 20,
        songNames: `<h5>kesariya <br> <div class="subtitle">Amitabh bhattacharya/div></h5>`,
        poster: "/assest/images/song-20.jpg"
    },
    {
        id: 21,
        songNames: `<h5>Mann Bharrya <br> <div class="subtitle">B praak|Jaani </div></h5>`,
        poster: "/assest/images/song-21.jpg"
    },
    {
        id: 22,
        songNames: `<h5>Kabhii Tumhhe <br> <div class="subtitle">Javed-Mohsin|Darshan Raval|Rashmi V</div></h5>`,
        poster: "/assest/images/song-22.jpg"
    },
    {
        id: 23,
        songNames: `<h5>Raataan Lambiyan <br> <div class="subtitle">Tanishk B|Jubin Nautiyal|Asees</div></h5>`,
        poster: "/assest/images/song-23.jpg"
    },
    {
        id: 24,
        songNames: `<h5>Baarishein <br> <div class="subtitle">Atif Aslam & Nushrat Bharucha </div></h5>`,
        poster: "/assest/images/song-24.jpg"
    },
    {
        id: 25,
        songNames: `<h5>Dil Banaane Waaleya <br> <div class="subtitle">Arjit Singh,Jonita,Vishal-Sheykhar</div></h5>`,
        poster: "/assest/images/song-25.jpg"
    },
    {
        id: 26,
        songNames: `<h5>Suna Hai <br> <div class="subtitle">Jubin Nautiyal|Jeet Gannguli|Rashmi</div></h5>`,
        poster: "/assest/images/song-26.jpg"
    },
    {
        id: 27,
        songNames: `<h5>HeartLess <br> <div class="subtitle">Arjit Singh|Adhyayan Suman, Ariana Ayam</div></h5>`,
        poster: "/assest/images/song-27.jpg"
    },
    {
        id: 28,
        songNames: `<h5>Soulmate <br> <div class="subtitle">Arjit Singh X Badshah</div></h5>`,
        poster: "/assest/images/song-28.jpg"
    },
    {
        id: 29,
        songNames: `<h5>Uska Hi Banana <br> <div class="subtitle">Arjit Singh|Aftab Shivdasani, Tia Bajpai</div></h5>`,
        poster: "/assest/images/song-29.jpg"
    },
    {
        id: 30,
        songNames: `<h5>BreathLess <br> <div class="subtitle">Shankar Mahadevan|Javed Akhtar</div></h5>`,
        poster: "/assest/images/song-30.jpg"
    },
    {
        id: 31,
        songNames: `<h5>December <br> <div class="subtitle">Abrar-ul-Haq|Khudgharz</div></h5>`,
        poster: "/assest/images/song-31.jpg"
    },
];

Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=> {
    e.getElementsByTagName("img")[0].src = songs[i].poster;
    e.getElementsByTagName("h5")[0].innerHTML = songs[i].songNames;
})

let playButton = document.getElementById("playButton");
let wave = document.getElementById("wave");

playButton.addEventListener('click', () =>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active-1');
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");
    } else {
        music.pause();
        wave.classList.remove('active-1')
        playButton.classList.remove("fa-pause");
        playButton.classList.add("fa-play");
    }
})

const makeBackground = () => {
    Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
        element.style.background = 'rgba(105, 105, 105, 0)';
    })
}

const makePlay = () => {
    Array.from(document.getElementsByClassName("fa-circle-pause")).forEach((el) => {
        el.classList.add("fa-circle-play");
        el.classList.remove("fa-circle-pause");
    })
}

let index = 0;
let footerPoster = document.getElementById("poster");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("play")).forEach((e)=>{
    e.addEventListener('click',(el)=> {
        index = el.target.id;
        music.src = `/assest/audios/audio-${index}.mp3`;
        music.play();
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");

        let songTitles = songs.filter((element)=>{
            return element.id == index;
        })
        songTitles.forEach(elss =>{
            let {songNames,poster} = elss;
            title.innerHTML = songNames;
            footerPoster.src = poster;
        })
        makeBackground();
        Array.from(document.getElementsByClassName("songItem"))[index-1].style.background = "rgba(136, 226, 17, 0.1)";
        makePlay();
        el.target.classList.add("fa-circle-pause");
        el.target.classList.remove("fa-circle-play");
        wave.classList.add('active-1');
    })
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");

music.addEventListener('timeupdate', () => {
    let musicCurrentTime = music.currentTime;
    let musicDuration = music.duration;
    let min = Math.floor(musicDuration / 60);
    let sec = Math.floor(musicDuration % 60);

    if (sec < 10) {
        sec = `0${sec}`;
    }
    currentEnd.innerHTML = `${min}: ${sec}`;

    let min1 = Math.floor(musicCurrentTime / 60);
    let sec1 = Math.floor(musicCurrentTime % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentStart.innerHTML = `${min1}: ${sec1}`;

    let progressBar = parseInt((musicCurrentTime / musicDuration) * 100);
    seek.value = progressBar;

    seek.addEventListener('change', () => {
        music.currentTime = seek.value * musicDuration / 100;
    })
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click",() => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName("songItem")).length;
    }
    music.src = `/assest/audios/audio-${index}.mp3`;
        music.play();
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");

        let songTitles = songs.filter((element)=>{
            return element.id == index;
        })
        songTitles.forEach(elss =>{
            let {songNames,poster} = elss;
            title.innerHTML = songNames;
            footerPoster.src = poster;
        })
        makeBackground();
        Array.from(document.getElementsByClassName("songItem"))[index-1].style.background = "rgba(136, 226, 17, 0.1)";
        makePlay();
        el.target.classList.add("fa-circle-pause");
        el.target.classList.remove("fa-circle-play");
        wave.classList.add('active-1');
});

next.addEventListener("click",() => {
    index ++;
        if (index > Array.from(document.getElementsByClassName("songItem")).length) {
            index = 1;
    }
    music.src = `/assest/audios/audio-${index}.mp3`;
        music.play();
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");

        let songTitles = songs.filter((element)=>{
            return element.id == index;
        })
        songTitles.forEach(elss =>{
            let {songNames,poster} = elss;
            title.innerHTML = songNames;
            footerPoster.src = poster;
        })
        makeBackground();
        Array.from(document.getElementsByClassName("songItem"))[index-1].style.background = "rgba(136, 226, 17, 0.1)";
        makePlay();
        el.target.classList.add("fa-circle-pause");
        el.target.classList.remove("fa-circle-play");
        wave.classList.add('active-1');
});