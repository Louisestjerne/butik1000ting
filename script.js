

function myFunction(x) {
    if (x.matches) { // If media query matches
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
    } else {
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
    }
}

let x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.replace(myFunction) // Attach listener function on state changes