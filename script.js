

// media query change
function WidthChange(mq) {
if (mq.matches) {
// window width is at least 500px
        let NewVid = function (movie) {
    // create a <video>
    let vid = document.createElement('video');
    vid.controls = false;
    vid.src = movie;
    vid.autoplay = true;
    vid.loop = true;
    vid.muted = true;
    vid.load();
    vid.style.width = '100%';

    // append to <div id="stemvid">
    stemvid.appendChild(vid);
}
let forside = 'forside.mp4';
// use the object
NewVid(forside);

let View = function (movie) {
    let vid = document.createElement('video');
    vid.controls = true;
    vid.src = movie;
    vid.load();
    vid.style.width= '100%';
    vid.style.zIndex= '-1';
    interview.appendChild(vid);
}
    } else {
// window width is less than 500px


        let NewVid = function (movie) {
    // create a <video>
    let vid = document.createElement('video');
    vid.controls = false;
    vid.src = movie;
    vid.autoplay = true;
    vid.loop = true;
    vid.muted = true;
    vid.load();
    vid.style.width = '100%';

    // append to <div id="stemvid">
    stemvid.appendChild(vid);
}
let forside = 'forsidemobil.mp4';
// use the object
NewVid(forside);

let View = function (movie) {
    let vid = document.createElement('video');
    vid.controls = true;
    vid.src = movie;
    vid.load();
    vid.style.width= '100%';
    vid.style.zIndex= '-1';
    interview.appendChild(vid);
}
    }
}

// media query event handler
if (matchMedia) {
let mq = window.matchMedia("(min-width: 500px)");
WidthChange(mq);
}


// https://www.sitepoint.com/javascript-media-queries/ 

