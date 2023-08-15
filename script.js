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
  
  // JavaScript code to make the background color of h2 elements lighter
function lightenH2BackgroundColors() {
    const h2Elements = document.querySelectorAll('.timeline-root h2');
  
    h2Elements.forEach((h2, index) => {
      const initialBackgroundColor = window.getComputedStyle(h2).backgroundColor;
    //    /d staat voor digits en /g staat voor global. in dit variabel zit initialbackgroundcolor en .match geeft aan wat er gematcht moet worden?
      const rgbValues = initialBackgroundColor.match(/\d+/g); // Extract RGB values
      if (rgbValues.length === 3) {
        const r = parseInt(rgbValues[0]);
        const g = parseInt(rgbValues[1]);
        const b = parseInt(rgbValues[2]);
        const lightenFactor = 0.05 * index; // Adjust the lighten factor
  
        // Calculate new RGB values
        const newR = Math.min(255, r + lightenFactor * 255);
        const newG = Math.min(255, g + lightenFactor * 255);
        const newB = Math.min(255, b + lightenFactor * 255);
  
        // Apply new background color to h2
        h2.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
      }
    });
  }
  
  // Call the function once the DOM is loaded
  document.addEventListener('DOMContentLoaded', lightenH2BackgroundColors);
  