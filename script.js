const container = document.querySelector(".container");

for (i=0; i<256; i++) {
    container.appendChild(document.createElement("div"))
}

const children = document.querySelectorAll(".container > div")


let opacity = 0;


children.forEach((child) => {
  child.addEventListener("mouseenter", (event) => {
    if(opacity <= 1) {
        opacity += 0.1
    }
    console.log(opacity)
    console.log(event.target.style.opacity)
    event.target.style.opacity = opacity
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

        opacity = 0;

        divChildren.forEach((child) => {
        child.addEventListener("mouseenter", (event) => {
            if(opacity <= 1) {
                opacity += 0.1
            }
            console.log(opacity)
            event.target.style.opacity = opacity
            let squareColor = `rgb(
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)}
            )`;
            event.target.style.backgroundColor = squareColor;
        });
        });

        boxWidth = 100/boxes
        divChildren.forEach((child) => {
        child.style.setProperty("width", `${boxWidth}%`)
            
        })
    }
)

const black = document.querySelector(".black");

black.addEventListener("click", 
    () => {
        const divChildren = document.querySelectorAll(".container > div")

        opacity = 0;

        divChildren.forEach((child) => {
        child.addEventListener("mouseenter", (event) => {
            if(opacity <= 1) {
                opacity += 0.1
            }
            console.log(opacity)
            event.target.style.opacity = opacity
            let squareColor = "black";
            event.target.style.backgroundColor = squareColor;
        });
        });

        boxWidth = 100/boxes
        divChildren.forEach((child) => {
        child.style.setProperty("width", `${boxWidth}%`)
            
        })
})