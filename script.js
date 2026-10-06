const container = document.querySelector(".container");

for (i=0; i<=256; i++) {
    container.appendChild(document.createElement("div"))
}

const children = document.querySelectorAll(".container > div")

children.forEach((child) => {
  child.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "blue";
  });
});