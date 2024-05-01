document.addEventListener('DOMContentLoaded', function () {
  const circles = document.querySelectorAll('.circle');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let currentActive = 0;

  // Initially, only the first circle should have the active class
  circles[currentActive].classList.add('active');

  updateButtons();

  function updateButtons() {
    // Initially, the previous button should be disabled
    prevButton.disabled = currentActive === 0

    // When all circles become active, disable the next button
    nextButton.disabled = currentActive === circles.length ;
  }

  prevButton.addEventListener('click', function () {
    if (currentActive > 0) {
      circles[currentActive].classList.remove('active');
      currentActive--;
      updateButtons();
    }
  });

  nextButton.addEventListener('click', function () {
    if (currentActive < circles.length+1) {
      circles[currentActive].classList.add('active');
      currentActive++;
      updateButtons();
    }
  });
});
