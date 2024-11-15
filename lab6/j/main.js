// Random color generator function
function randomHex() {
    let letters = "0123456789ABCDEF";
    let color = '';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Load houses data from the local JSON file
async function loadHouses() {
    // Make sure houses.json is in the same directory as your index.html file
    // If it's in a different directory, adjust the path accordingly
    try {
        const response = await fetch("houses.json"); // Use the correct path if necessary
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Return the parsed JSON data
    } catch (error) {
        console.error("Failed to fetch houses data:", error);
        throw error;  // Re-throw the error to be caught later
    }
}

// Load random color data from the external API
async function loadColor() {
    try {
        const response = await fetch("https://www.thecolorapi.com/id?hex=" + randomHex() + "&format=json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Return the color data as JSON
    } catch (error) {
        console.error("Failed to fetch color data:", error);
        throw error;  // Re-throw the error to be caught later
    }
}

// DOM content loaded
document.addEventListener("DOMContentLoaded", async () => {
    let houses = [];
    let color = ""; // Declare the color variable

    try {
        // Load data for houses and color
        houses = await loadHouses();
        color = await loadColor();
    } catch (e) {
        // Handle errors gracefully
        console.log("Something went wrong while fetching data.");
        return;  // Stop execution if any fetch fails
    }

    // Prepare HTML to display the houses and their members
    let html = "";

    houses.forEach((house) => {
        let family = house.members.join(" | "); // Join family members with a separator

        // Create HTML snippet for each house and its members
        let objInfo = `
            <dt class="house">${house.name}</dt>
            <dd class="folks">${family}</dd>
        `;
        html += objInfo; // Append the generated HTML to the `html` variable
    });

    // Reference to the container div where the info will be displayed
    const container = document.querySelector("#container");
    container.innerHTML = html;  // Insert the HTML into the container

    // Apply the random background color to the body
    if (color && color.hex && color.hex.value) {
        document.body.style.background = color.hex.value;  // Set the background color
    }
});
