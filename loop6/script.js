const card = document.getElementById("card");
let y,x;
document.addEventListener("mousemove", () => {
    var posX = event.clientX;
    var posY = event.clientY;
    x = posX /2
    y = posY/2
console.log(x);
    card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});