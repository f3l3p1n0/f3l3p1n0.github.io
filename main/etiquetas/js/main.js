const selectedContainers = document.querySelectorAll(".select-box");

selectedContainers.forEach(container => {
  const selected = container.querySelector(".selected");
  const optionsContainer = container.querySelector(".options-container");
  const optionsList = container.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });
  
  optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selectedOption = o.querySelector(".list__item").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
  
  document.addEventListener("click", (event) => {
    const isClickInside = container.contains(event.target);
    if (!isClickInside) {
      optionsContainer.classList.remove("active");
    }
  });
});
