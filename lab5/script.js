const video = document.getElementById('videoPlayer');
const audio = new Audio(); // Create an audio object

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

document.getElementById('play').onclick = () => {
    const selectedSong = document.getElementById('pick').value;
    if (selectedSong) {
        audio.src = selectedSong;
        audio.play();
    }
};

document.getElementById('pause').onclick = () => {
    audio.pause();
};

// Set audio speed from the speed options
document.querySelectorAll('.audio-speed').forEach(speedButton => {
    speedButton.onclick = () => {
        const speedText = speedButton.innerText;
        if (speedText.includes('Slow')) {
            audio.playbackRate = 0.5; // Set to half speed
        } else if (speedText.includes('Normal')) {
            audio.playbackRate = 1; // Set to normal speed
        } else if (speedText.includes('Fast')) {
            audio.playbackRate = 2; // Set to double speed
        }
    };
});

// Audio volume controls
document.getElementById('audioVolumeUp').onclick = () => {
    audio.volume = Math.min(audio.volume + 0.1, 1); // Increase audio volume
};

document.getElementById('audioVolumeDown').onclick = () => {
    audio.volume = Math.max(audio.volume - 0.1, 0); // Decrease audio volume
};
