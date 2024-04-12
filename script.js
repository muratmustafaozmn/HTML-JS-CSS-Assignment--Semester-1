document.addEventListener("DOMContentLoaded", function() {
    // Variable to identify the paragraph to be highlighted
    var paragraph = document.querySelector("p");
    var button = document.getElementById("changeText");
    var image = document.getElementById("image");

    // Event listener to highlight paragraph on hover
    paragraph.addEventListener("mouseover", function() {
        paragraph.classList.add("highlight");
    });

    // Event listener to change text on button click
    button.addEventListener("click", function() {
        paragraph.textContent = "Text changed!";
    });

    // Event listener to change image source on image click
    image.addEventListener("click", function() {
        image.src = "new_image.jpg";
    });
});
