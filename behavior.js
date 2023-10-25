var thumbnailElement = document.getElementById("smart_thumbnail");
var isSmall = true; // The divisor determines whether the image is small or large

thumbnailElement.addEventListener("click", function() {
    // If the image is small, make it big
    if (isSmall) {
        thumbnailElement.classList.remove("small");
        isSmall = false;
    } 
    // If the image is large, make it smaller
    else {
        thumbnailElement.classList.add("small");
        isSmall = true;
    }
});
