document.addEventListener('DOMContentLoaded', () => {
    const albums = document.querySelectorAll('.gallery');
    const captions = document.getElementById('caption');
    let currentSlideIndex = 0;
    let currentAlbum = 'Jungle';
    let autoplayInterval;

    const showAlbum = (album) => {
        albums.forEach((gallery) => {
            gallery.style.display = (gallery.id === album) ? 'flex' : 'none';
        });
        currentSlideIndex = 0;
        currentAlbum = album;
        updateSlides(album);
        addControlListeners(album);
        startAutoplay();
    };

    const updateSlides = (album) => {
        const slides = document.querySelectorAll(`#${album} .slides img`);
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentSlideIndex) {
                slide.classList.add('active');
                captions.textContent = slide.alt;
            }
        });
    };

    const startAutoplay = () => {
        const slides = document.querySelectorAll(`#${currentAlbum} .slides img`);
        autoplayInterval = setInterval(() => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            updateSlides(currentAlbum);
        }, 3000);
    };

    const stopAutoplay = () => {
        clearInterval(autoplayInterval);
    };

    const addControlListeners = (album) => {
        const slides = document.querySelectorAll(`#${album} .slides img`);
        document.querySelector(`#prev-${album}`).addEventListener('click', () => {
            stopAutoplay();
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            updateSlides(album);
            resumeAutoplay(album);
        });

        document.querySelector(`#next-${album}`).addEventListener('click', () => {
            stopAutoplay();
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            updateSlides(album);
            resumeAutoplay(album);
        });
    };

    const resumeAutoplay = (album) => {
        setTimeout(() => {
            startAutoplay();
        }, 1000);
    };

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const album = e.target.dataset.album;
            showAlbum(album);
            stopAutoplay();
        });
    });

    showAlbum('Jungle');
    startAutoplay();
});

document.addEventListener("DOMContentLoaded", initGalleries);

let interval_ID = null;

function initGalleries() {
    const galleries = document.querySelectorAll('.gallery');

    galleries.forEach(gallery => {
        const slides = gallery.querySelector(".slides");
        const images = slides.querySelectorAll("img");
        const next_btn = gallery.querySelector(".next");
        const back_btn = gallery.querySelector(".prev");
        const figcaption = gallery.querySelector("figcaption");

        images.forEach((img, index) => {
            if (index !== 0) img.classList.add("hide");
        });

        figcaption.textContent = images[0].getAttribute('alt');

        next_btn.addEventListener("click", (e) => changeSlide(e, gallery));
        back_btn.addEventListener("click", (e) => changeSlide(e, gallery));

        if (window.innerWidth >= 700) {
            interval_ID = setInterval(() => next_btn.click(), 5000);
        }
    });

    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const album = e.target.getAttribute('data-album');
            switchAlbum(album);
        });
    });
}

function changeSlide(e, gallery) {
    const slides = gallery.querySelector(".slides");
    const images = slides.querySelectorAll("img");
    const showing = slides.querySelector(".current");
    let nextUp = "";

    clearInterval(interval_ID);

    if (e.target.className.includes("prev")) {
        nextUp = showing.previousElementSibling || images[images.length - 1];
    } else if (e.target.className.includes("next")) {
        nextUp = showing.nextElementSibling || images[0];
    }

    showing.classList.add("hide");
    showing.classList.remove("current");

    nextUp.classList.remove("hide");
    nextUp.classList.add("current");

    const figcaption = gallery.querySelector("figcaption");
    figcaption.textContent = nextUp.getAttribute('alt');
}

function switchAlbum(album) {
    const galleries = document.querySelectorAll('.gallery');

    galleries.forEach(gallery => {
        if (gallery.id === album) {
            gallery.style.display = "block";
        } else {
            gallery.style.display = "none";
        }
    });
}
