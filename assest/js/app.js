let fullImageBox = document.getElementById("full-image-box");
let fullImage = document.getElementById("fullImage");

function openImage(open) {
    fullImageBox.style.display = "flex";
    fullImage.src = open;
}

function closeImage() {
    fullImageBox.style.display = "none";
}