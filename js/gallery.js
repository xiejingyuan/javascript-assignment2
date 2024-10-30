const flowers = ["flowers-pink", "flowers-purple", "flowers-red", "flowers-white", "flowers-yellow"];

const imageGallery = document.getElementById("imgs");
flowers.forEach(
    flower => {
        const listItem = document.createElement("li");
        const image = document.createElement("img");

        image.src = "images/" + flower + "-small.jpg"
        image.alt = flower

        listItem.appendChild(image);
        imageGallery.appendChild(listItem);

        image.onclick = function() {
            image.src = "images/" + flower + "-large.jpg"
        }
    }
)

