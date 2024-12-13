const API_KEY = 'Sg3_s4kPbotelA3hLkSR3s9tmiuWvei3qWS6UGI1A98'; // Replace with your actual Unsplash API key

// DOM Elements
const tattooGallery = document.getElementById('tattoo-gallery');
const favoritesList = document.getElementById('favorites-list');

// Array to keep track of all current displayed tattoo images
let currentImages = [];
let allImages = [];  // To store all the fetched images and manage favorites

// Fetch Tattoo Images from Unsplash API
async function fetchTattooImages() {
    console.log("Fetching tattoo images..."); // Debugging log

    try {
        // Define a list of related search keywords
        const query = "tattoo, stencil, drawing, flash tattoo, flashwork tattoo, line drawing, tattoo sketch, tattoo art";

        // Fetch tattoo images from Unsplash with the updated query
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${API_KEY}&per_page=30`);

        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }

        const data = await response.json();
        console.log(data); // Debugging log to see what data we are getting

        // Get all the images from the results
        const tattooImages = data.results;

        // Store the fetched images to manage them
        allImages = tattooImages;

        // Remove any images already in favorites
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const filteredImages = tattooImages.filter(image => !favorites.some(fav => fav.id === image.id));

        // Store the filtered images to replace the existing ones
        currentImages = filteredImages;

        // Display the filtered tattoo images
        displayTattooImages(filteredImages);
    } catch (error) {
        console.error('Error fetching tattoo images:', error);
    }
}

// Display Tattoo Images
function displayTattooImages(images) {
    console.log("Displaying tattoo images..."); // Debugging log

    // Clear the gallery before adding new images
    tattooGallery.innerHTML = '';  

    if (images.length === 0) {
        tattooGallery.innerHTML = '<p>No tattoo images found.</p>';
        return;
    }

    // Loop through the images and add them to the gallery
    images.forEach(image => {
        const tattooCard = document.createElement('div');
        tattooCard.classList.add('tattoo-card');
        tattooCard.innerHTML = `
            <img src="${image.urls.regular}" alt="${image.alt_description || 'Tattoo Image'}">
            <button onclick="saveFavorite('${image.id}', '${image.urls.regular}')">Save to Favorites</button>
        `;
        tattooGallery.appendChild(tattooCard);
    });
}

// Save Favorite Tattoo to LocalStorage
function saveFavorite(id, url) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if the favorite already exists
    if (!favorites.some(fav => fav.id === id)) {
        favorites.push({ id, url });
        localStorage.setItem('favorites', JSON.stringify(favorites));
        displayFavorites();
    }

    // Remove the saved image from the gallery
    currentImages = currentImages.filter(image => image.id !== id);

    // If there are images left in the current batch, display them
    if (currentImages.length > 0) {
        displayTattooImages(currentImages);
    } else {
        // If no images are left, fetch new images
        fetchTattooImages();
    }
}

// Unsave Favorite Tattoo from LocalStorage
function unsaveFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Remove the favorite by id
    favorites = favorites.filter(fav => fav.id !== id);

    // Save the updated favorites list
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Refresh the favorites display
    displayFavorites();

    // Add the image back to the gallery if it's not already there
    const image = allImages.find(img => img.id === id);
    if (image) {
        currentImages.push(image);
        displayTattooImages(currentImages);
    }
}

// Display Favorite Tattoos from LocalStorage
function displayFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favoritesList.innerHTML = '';

    favorites.forEach(favorite => {
        const favCard = document.createElement('div');
        favCard.classList.add('favorite-card');
        favCard.innerHTML = `
            <img src="${favorite.url}" alt="Favorite Tattoo">
            <button class="remove-btn" onclick="unsaveFavorite('${favorite.id}')">X</button>
        `;
        favoritesList.appendChild(favCard);
    });
}

// Initial Call to Load Tattoos on Page Load
window.addEventListener('load', () => {
    console.log('Page loaded, fetching tattoo images'); // Debugging log
    fetchTattooImages();

    // Display Saved Favorites on Page Load
    displayFavorites();
});
