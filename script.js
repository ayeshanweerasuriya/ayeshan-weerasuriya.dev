const cards = document.querySelectorAll(".card");

const handleCardClick = (card) => {
  // Remove the "expanded" class from all cards
  cards.forEach((c) => {
    c.classList.remove("expanded-w");
    c.classList.remove("expanded");
    c.style.overflowY = "hidden";
    c.scrollTop = 0;
  });

  // Add the "expanded" class to the clicked card
  card.classList.add(mediaQuery.matches ? "expanded-w" : "expanded");
};

const mediaQuery = window.matchMedia("(min-width: 800px)");

const attachListeners = () => {
  cards.forEach((card) => {
    card.addEventListener("click", () => handleCardClick(card));
  });
};

const removeListeners = () => {
  cards.forEach((card) => {
    card.removeEventListener("click", () => handleCardClick(card));
  });
};

// Initial setup
if (mediaQuery.matches) {
  attachListeners();
} else {
  removeListeners();
}

// Listen for changes in media query
mediaQuery.addListener((event) => {
  if (event.matches) {
    // Screen size is now larger than 800px
    attachListeners();
  } else {
    // Screen size is now smaller than 800px
    removeListeners();
  }
});
