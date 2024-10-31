
const imageBoxes = document.querySelectorAll('.image-box');

imageBoxes.forEach((box, index) => {
  box.addEventListener('mouseenter', () => {

    imageBoxes.forEach((otherBox, otherIndex) => {
      if (otherIndex !== index) {
        otherBox.style.filter = 'blur(10px)';
        otherBox.style.opacity = '0.5';
      } else {
        otherBox.style.filter = 'blur(0)';
        otherBox.style.opacity = '1';
        otherBox.style.transform = 'scale(1.1)';
      }
    });
  });

  box.addEventListener('mouseleave', () => {
    // Reset all images to normal state
    imageBoxes.forEach(otherBox => {
      otherBox.style.filter = 'blur(5px)';
      otherBox.style.opacity = '0.7';
      otherBox.style.transform = 'scale(1)';
    });
  });
});
