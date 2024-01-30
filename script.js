const mediaQuery = window.matchMedia("(min-width: 1100px)");

function handleMediaQueryChange(event) {
  // Remove the "expanded" class from all cards
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("expanded-w");
    card.classList.remove("expanded");
    card.style.overflowY = "hidden";
    card.scrollTop = 0;
  });
}

// Call the handleMediaQueryChange function initially to set up the event listeners based on the current window width
handleMediaQueryChange(mediaQuery);

// Add a listener for the media query change event
mediaQuery.addEventListener("change", handleMediaQueryChange);

// Add event listeners for the "click" event on the cards
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Remove the "expanded" class from all cards
    document.querySelectorAll(".card").forEach((c) => {
      c.classList.remove("expanded-w");
      c.classList.remove("expanded");
      c.style.overflowY = "hidden";
      c.scrollTop = 0;
    });

    // Check the media query condition
    if (mediaQuery.matches) {
      // If the media query condition is met, add the "expanded-w" class to the clicked card
      card.classList.add("expanded-w");
    } else {
      // If the media query condition is not met, add the "expanded" class to the clicked card
      card.classList.add("expanded");
    }

    // Hide the overflow of the clicked card
    card.style.overflowY = "hidden";
    card.scrollTop = 0;

    // Show the overflow of the clicked card after a delay
    // setTimeout(() => {
    //   card.style.overflowY = "auto";
    // }, 500);
  });
});
