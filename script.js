// Define a media query to check if the viewport is at least 1100px wide
const mediaQuery = window.matchMedia("(min-width: 1100px)");

// Select all elements with the class "card"
const cards = document.querySelectorAll(".card");

// Function to handle changes in the media query
function handleMediaQueryChange() {
  // Iterate through each card and remove "expanded-w" and "expanded" classes, and reset scroll position
  cards.forEach((card) => {
    card.classList.remove("expanded-w", "expanded");
    card.scrollTop = 0;
  });
}

// Function to handle a card click event
function handleCardClick(card) {
  // Remove "expanded-w" and "expanded" classes, and reset scroll position for all cards
  cards.forEach((c) => {
    c.classList.remove("expanded-w", "expanded");
    c.scrollTop = 0;
  });

  // Add "expanded-w" class if the media query matches, otherwise add "expanded" class
  if (mediaQuery.matches) {
    card.classList.add("expanded-w");
  } else {
    card.classList.add("expanded");
  }

  // Reset scroll position for the clicked card
  card.scrollTop = 0;
}

// Initial call to handle any changes in the media query
handleMediaQueryChange(mediaQuery);

// Add an event listener to the media query to handle changes
mediaQuery.addEventListener("change", handleMediaQueryChange);

// Add a click event listener to each card to handle card clicks
cards.forEach((card) => {
  card.addEventListener("click", () => handleCardClick(card));
});
