const card = document.getElementById("card");
let y,x;
document.addEventListener("mousemove", () => {
    var posX = event.clientX /2;
    var posY = event.clientY /2;
    x = posX /10
    y = posY/10
console.log(x);
    card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});