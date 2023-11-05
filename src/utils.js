export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function addButtonAndClose (container){
  const closeButton = document.createElement("div");
  closeButton.className = "cl-btn-7";
  
  container.append(closeButton)

  closeButton.addEventListener("click", () => {
      container.classList.add('hidden')
      location.reload()
     console.log(container)
  });
}