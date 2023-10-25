var thumbnailElement = document.getElementById("smart_thumbnail");
var isSmall = true; // İkilik deyəni, şəkilin kiçik və ya böyük olduğunu təyin edir

thumbnailElement.addEventListener("click", function() {
    // Əgər şəkil kiçikdirsə, onu böyük edin
    if (isSmall) {
        thumbnailElement.classList.remove("small");
        isSmall = false;
    } 
    // Əgər şəkil böyükdürsə, onu kiçik edin
    else {
        thumbnailElement.classList.add("small");
        isSmall = true;
    }
});
