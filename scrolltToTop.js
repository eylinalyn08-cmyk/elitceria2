// Function that executes when the visitor taps the arrow
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' /* Creates a sleek, modern scrolling animation */
  });
}
window.onscroll = function() {
  var topButton = document.getElementById("backToTopBtn");
  
  // Displays button only if screen width is mobile and user has scrolled 300px down
  if (window.innerWidth <= 768 && (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)) {
    topButton.style.display = "flex";
  } else {
    topButton.style.display = "none";
  }
};
