const toast = document.querySelector(".toast");

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".animal-card").forEach((card) => {
  const openProfile = () => {
    document.querySelectorAll(".animal-card").forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
    toast.textContent = `${card.dataset.name} 正等待與你相遇`;
    toast.classList.add("visible");
    window.setTimeout(() => toast.classList.remove("visible"), 2200);
  };

  card.addEventListener("click", openProfile);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProfile();
    }
  });
});
