document.addEventListener("DOMContentLoaded", function () {
    const previewHeaders = document.querySelectorAll(".website-preview h3");
    const imgElements = document.querySelectorAll(".timeline-root img");
  
    // Show the first image by default
    imgElements[0].classList.add("visible");
  
    previewHeaders.forEach((h3, index) => {
      h3.addEventListener("click", function () {
        // Hide all images
        imgElements.forEach((img) => img.classList.remove("visible"));
  
        // Show the corresponding image
        imgElements[index].classList.add("visible");
      });
    });
  });
  