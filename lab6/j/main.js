fetch("houses.json")
    .then((response) => response.json())
    .then((data) => {
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = "";

        //the argument "house" passed to the arrow function
        //holds each item in the array in turn.
        data.forEach((house) => {
            let family = house.members.join(" | ");

            // generate the html snippet for one array item
            //to be added to the "html" temp holder.
            let objInfo = `<p class="house">${house.name}</p>
        <p class="folks">${family}</p>`;
            html += objInfo;
        });

        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = html;
    })
    .catch((err) => console.log("Oops!", err));