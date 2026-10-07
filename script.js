const container = document.querySelector(".container");

for (i=0; i<256; i++) {
    container.appendChild(document.createElement("div"))
}

const children = document.querySelectorAll(".container > div")

children.forEach((child) => {
  child.addEventListener("mouseenter", (event) => {
    let squareColor = `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}
    )`;
    event.target.style.backgroundColor = squareColor;
  });
});

const button = document.querySelector("button");

let boxes;
let boxWidth = 0;

button.addEventListener("click",
    () => {
        boxes = prompt("Enter no. of squares per side(1-100): ", 16);
        if(boxes > 100) {
            while(boxes > 100) {
                 boxes = prompt("Enter no. of squares per side(1-100): ", 16);
            }
        }
        container.innerHTML = "";
        for (i=0; i<boxes*boxes; i++) {
            container.appendChild(document.createElement("div"));
        }
        const divChildren = document.querySelectorAll(".container > div")

        divChildren.forEach((child) => {
            child.addEventListener("mouseenter", (event) => {
                event.target.style.backgroundColor = "blue";
            });
        });

        boxWidth = 100/boxes
        console.log(`${boxWidth}%`)
        divChildren.forEach((child) => {
            child.style.setProperty("width", `${boxWidth}%`)
            
        })
    }
)