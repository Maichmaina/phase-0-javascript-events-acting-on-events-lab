// Your code here
var dodger = document.getElementById('dodger');

// Define the function to move the dodger to the left
function moveDodgerLeft() {
    var dodger = document.getElementById('dodger'); // Assuming there's an element with the id 'dodger'
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  // Define the function to move the dodger to the right
  function moveDodgerRight() {
    var dodger = document.getElementById('dodger');
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
    var rightBoundary = window.innerWidth - dodger.clientWidth; // Calculate the right boundary

  if (left < rightBoundary) { // Check if the current position is within the boundary
    dodger.style.left = `${left + 1}px`; // Update the position to move the dodger to the right
  }
}
  
  // Add event listeners to handle key presses
  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  