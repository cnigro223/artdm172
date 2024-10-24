const video = document.getElementById('videoPlayer');

document.getElementById('myplay').onclick = () => {
    video.play();
};

document.getElementById('mypause').onclick = () => {
    video.pause();
};

document.getElementById('slo').onclick = () => {
    video.playbackRate = 0.5; // Set to half speed
};

document.getElementById('normal').onclick = () => {
    video.playbackRate = 1; // Set to normal speed
};

document.getElementById('fast').onclick = () => {
    video.playbackRate = 1.5; // Set to 1.5x speed
};

document.getElementById('volumeUp').onclick = () => {
    video.volume = Math.min(video.volume + 0.1, 1); // Increase volume
};

document.getElementById('volumeDown').onclick = () => {
    video.volume = Math.max(video.volume - 0.1, 0); // Decrease volume
};

document.getElementById('mute').onclick = () => {
    video.muted = !video.muted; // Toggle mute
};
