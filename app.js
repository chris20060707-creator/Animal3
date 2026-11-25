const toast = document.querySelector(".toast");

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".animal-card").forEach((card) => {
  const selectAnimal = async () => {
    const animalId = card.dataset.animal;
    await fetch("/api/feature", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ animalId }),
    }).catch(() => null);

    document.querySelectorAll(".animal-card").forEach((item) => item.classList.remove("featured"));
    card.classList.add("featured");
    toast.textContent = `${card.querySelector("h3").textContent} 已加入候選名單`;
    toast.classList.add("visible");
    window.setTimeout(() => toast.classList.remove("visible"), 2200);
  };

  card.addEventListener("click", selectAnimal);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectAnimal();
    }
  });
});
