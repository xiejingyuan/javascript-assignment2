const flowers = ["flowers-pink", "flowers-purple", "flowers-red", "flowers-white", "flowers-yellow"];

const gallerySection = document.getElementById("gallery");

const img = gallerySection.querySelector("img");
const figcaption = gallerySection.querySelector("figcaption");
const imgsList = gallerySection.querySelector("ul");

img.src = "images/" + flowers[0] + "-large.jpg";
img.alt = flowers[0];
figcaption.textContent = flowers[0];

flowers.forEach(
    flower => {
        const listItem = document.createElement("li");
        const image = document.createElement("img");
        
        image.src = "images/" + flower + "-small.jpg"
        image.alt = flower

        listItem.appendChild(image);
        imgsList.appendChild(listItem);

        image.onclick = function() {
            img.src = "images/" + flower + "-large.jpg"
            img.alt = flower
            figcaption.textContent = flower
        }
    }
)

