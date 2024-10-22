document.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".animate-on-scroll");

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top + 10 < window.innerHeight && rect.bottom > 0;

    if (isVisible && !card.classList.contains("animate__animated")) {
      card.classList.add("animate__animated", "animate__fadeInUp");
    }
  });
});
