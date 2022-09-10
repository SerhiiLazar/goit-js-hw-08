import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);




const savedVideo = localStorage.getItem('videoplayer-current-time') || 0;
console.log(savedVideo);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds);
    
    console.log("time", seconds);
};

player.setCurrentTime(savedVideo)
.then(function(pause) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

console.log(onPlay);