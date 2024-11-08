// time frames are to keep myself organized
let myCues = [
    { seconds: 0, callback: func1 },    // "First, get a rock." (0:00)
    { seconds: 2, callback: func2 },    // "Smash the rock." (0:02)
    { seconds: 4, callback: func3 },    // "98% Silicon Dioxide" (0:07)
    { seconds: 17, callback: func4 },   // "Put into Crucible" (0:17)
    { seconds: 19, callback: func5 },   // "Heat the Silicon" (0:19)
    { seconds: 40, callback: func6 },   // "Photoresist on the Wafer" (0:40)
    { seconds: 50, callback: func7 },   // "Shine Laser Beam through Mask" (0:50)
    { seconds: 58, callback: func8 },   // "Develop the Photoresist" (0:58)
    { seconds: 72, callback: func9 },// "Chemical Mechanical Polishing" (1:12)
    { seconds: 94, callback: func10 },// "And that's how you make a CPU." (1:38)
];

// Reference to the video element
const videoPlayer = document.getElementById("videoPlayer");

// Event listener for `timeupdate` to handle cue points
videoPlayer.addEventListener("timeupdate", function () {
    const currentTime = videoPlayer.currentTime;

    myCues.forEach((cue) => {
        // Check if the video time has passed the cue point and run the callback
        if (currentTime >= cue.seconds && !cue.triggered) {
            cue.callback();
            cue.triggered = true; // Prevent the function from being called again
        }
    });
});

// Video control buttons
const playButton = document.getElementById("playVideo");
const pauseButton = document.getElementById("pauseVideo");
const sloButton = document.getElementById("sloVideo");
const normalButton = document.getElementById("normalVideo");
const fastButton = document.getElementById("fastVideo");
const volumeUpButton = document.getElementById("volumeUp");
const volumeDownButton = document.getElementById("volumeDown");
const muteButton = document.getElementById("mute");

// Play button
playButton.addEventListener("click", () => {
    videoPlayer.play();
    inactiveVideoButton(playButton);
});

// Pause button
pauseButton.addEventListener("click", () => {
    videoPlayer.pause();
    inactiveVideoButton(pauseButton);
});

// Slow motion button
sloButton.addEventListener("click", () => {
    videoPlayer.playbackRate = 0.5; // Slow down to half speed
    inactiveVideoButton(sloButton);
});

// Normal speed button
normalButton.addEventListener("click", () => {
    videoPlayer.playbackRate = 1; // Reset to normal speed
    inactiveVideoButton(normalButton);
});

// Fast forward button
fastButton.addEventListener("click", () => {
    videoPlayer.playbackRate = 1.5; // Speed up to 1.5x
    inactiveVideoButton(fastButton);
});

// Volume up button
volumeUpButton.addEventListener("click", () => {
    if (videoPlayer.volume < 1) {
        videoPlayer.volume += 0.1;
    }
    inactiveVideoButton(volumeUpButton);
});

// Volume down button
volumeDownButton.addEventListener("click", () => {
    if (videoPlayer.volume > 0) {
        videoPlayer.volume -= 0.1;
    }
    inactiveVideoButton(volumeDownButton);
});

// Mute button
muteButton.addEventListener("click", () => {
    videoPlayer.muted = !videoPlayer.muted; // Toggle mute
    inactiveVideoButton(muteButton);
});

// Function to highlight the clicked button and disable others
function inactiveVideoButton(button) {
    const buttons = [
        playButton,
        pauseButton,
        sloButton,
        normalButton,
        fastButton,
        volumeUpButton,
        volumeDownButton,
        muteButton
    ];
    buttons.forEach((item) => {
        if (item !== button) {
            item.style.backgroundColor = "gray";
            item.style.color = "white";
        }
    });
    button.style.backgroundColor = "darkred";
    button.style.color = "yellow";
}

// Custom callback functions for the updated cue points
function func1() {
    document.querySelector("#image").src = "https://www.outdooressentialproducts.com/-/media/project/ufpi/outdoor-essentials/products/images/landscape/rocks/204923_small-landscape-rock-grey/outdoor-essentials_gray-landscape-small-rock_image_204923_website.png?h=1000&iar=0&w=1000&sc_lang=en&hash=56001ABA4842479768A556292C58B6E6"; // Image of rock
    document.querySelector("#heading").innerText = "Get a Rock";
    document.querySelector("#text-content").innerText = "First, get a rock.";
}

function func2() {
    document.querySelector("#image").src = "https://media.istockphoto.com/id/1395346657/vector/heavy-hammer-hits-the-stones-extraction-of-ore-and-minerals-hard-physical-labor-cartoon.jpg?s=612x612&w=0&k=20&c=hJreX7lAsjlItO0V45GHGRIjRQDkpcyTvZkC1v03i7c="; // Image of smashing rock
    document.querySelector("#heading").innerText = "Smash the Rock";
    document.querySelector("#text-content").innerText = "Then, smash the rock.";
}

function func3() {
    document.querySelector("#image").src = "https://static.vecteezy.com/system/resources/previews/035/593/282/non_2x/ai-generated-realistic-nerd-emoji-face-ai-generative-free-png.png"; // Image of silicon dioxide
    document.querySelector("#heading").innerText = "98% Silicon Dioxide";
    document.querySelector("#text-content").innerText = "Now, you've got 98% concentrated silicon dioxide.";
}

function func4() {
    document.querySelector("#image").src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmpmzg-LtHjio-4FzIc8W1AbzOuNDqSx048briO4OpNgpiqqb6pQvwenp-9xAYUkiP8UT87akdJ8uKPUF6eG_6MSkDZS2XbDBP2vjbUvl3HdYWWByUq36-WQVg1LNssqZUuun_qwbJwo6k/s1600/crucible.jpg"; // Image of polysilicon in crucible
    document.querySelector("#heading").innerText = "Put into Crucible";
    document.querySelector("#text-content").innerText = "Put the polysilicon ingots into a crucible.";
}

function func5() {
    document.querySelector("#image").src = "https://media.tenor.com/057tLu4ypTAAAAAe/elmo-burning-background.png"; // Image of heating silicon
    document.querySelector("#heading").innerText = "Heat the Silicon";
    document.querySelector("#text-content").innerText = "Heat the silicon ingots to 1698 °K.";
}

function func6() {
    document.querySelector("#image").src = "https://www.biscuitpeople.com/media/cache/platform_full/5876a5f645034.jpg"; // Image of photoresist on wafer
    document.querySelector("#heading").innerText = "Photoresist on the Wafer";
    document.querySelector("#text-content").innerText = "Put photoresist on the wafer.";
}

function func7() {
    document.querySelector("#image").src = "https://i.redd.it/my-laser-cat-second-slide-is-laser-eye-edit-v0-577p6vycqyl81.jpg?width=1125&format=pjpg&auto=webp&s=b9532df21a94bfeae535b7d58592587822af5985"; // Image of shining laser through mask
    document.querySelector("#heading").innerText = "Shine Laser Beam through Mask";
    document.querySelector("#text-content").innerText = "Take your chromium-etched photo-lithographic quartz mask and shine a laser beam through it onto the wafer.";
}

function func8() {
    document.querySelector("#image").src = "https://ent.uci.edu/learning-center/useful-links/images/How_to_Stop_Snoring_by_Head_and_Neck_Surgeon_Orange_County_1.jpg"; // Image of developing photoresist
    document.querySelector("#heading").innerText = "Develop the Photoresist";
    document.querySelector("#text-content").innerText = "Now, develop the photoresist.";
}

function func9() {
    document.querySelector("#image").src = "https://www.carpro-us.com/product_images/uploaded_images/dotfuk8zdk7uutxwigt5cjkucqdzhzq01643116809.jpg"; // Image of polishing wafer
    document.querySelector("#heading").innerText = "Chemical Mechanical Polishing";
    document.querySelector("#text-content").innerText = "Now, do some chemical mechanical polishing.";
}

function func10() {
    document.querySelector("#image").src = "https://i.pinimg.com/736x/49/62/ee/4962ee8228258c179a707f7371a08d2b.jpg"; // Image of finished CPU
    document.querySelector("#heading").innerText = "Finished CPU";
    document.querySelector("#text-content").innerText = "And that's how you make a CPU.";
}
