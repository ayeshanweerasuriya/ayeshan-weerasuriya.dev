const mediaQuery = window.matchMedia("(min-width: 1100px)");
const cards = document.querySelectorAll(".card");

function handleMediaQueryChange() {
  cards.forEach((card) => {
    card.classList.remove("expanded-w", "expanded");
    card.scrollTop = 0;
  });
}

function handleCardClick(card) {
  cards.forEach((c) => {
    c.classList.remove("expanded-w", "expanded");
    c.scrollTop = 0;
  });

  if (mediaQuery.matches) {
    card.classList.add("expanded-w");
  } else {
    card.classList.add("expanded");
  }

  card.scrollTop = 0;
}

handleMediaQueryChange(mediaQuery);
mediaQuery.addEventListener("change", handleMediaQueryChange);

cards.forEach((card) => {
  card.addEventListener("click", () => handleCardClick(card));
});
