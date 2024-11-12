
const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");
const dotsContainer = document.querySelector(".dots-container");
let index = 0;

// Function to create dots
function createDots() {
  cards.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === index) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", () => jumpToSlide(i));
    dotsContainer.appendChild(dot);
  });
}

// Function to update the active dot
function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Function to jump to a specific slide
function jumpToSlide(slideIndex) {
  index = slideIndex;
  slider.style.transform = `translateX(-${index * 100}%)`;
  updateDots(); // Update the active dot
}

// Function to slide to the next card
function slideNext() {
  // Hide the current card by adding the hidden class
  cards[index].classList.add("hidden");

  // Update the index to the next card, loop back to the first card if needed
  index = (index + 1) % cards.length;

  // Show the new card by removing the hidden class after a short delay
  setTimeout(() => {
    cards[index].classList.remove("hidden");
    updateDots(); // Update the active dot
  }, 500); // Match the duration of the transition for a smooth effect

  // Move the slider to the next card
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Automatically slide every 3 seconds
setInterval(slideNext, 3000);

// Initialize the dots and start the slider
createDots();
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add 'active' class to the clicked button
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      productCards.forEach((card) => {
        if (
          category === "all" ||
          card.getAttribute("data-category") === category
        ) {
          card.style.display = "flex"; // Show the product
        } else {
          card.style.display = "none"; // Hide the product
        }
      });
    });
  });
});
