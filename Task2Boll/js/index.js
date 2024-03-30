let circle = document.querySelector(".circle");
let box=document.querySelector(".box");
let digitX = 0; 
let digitY = 0; 

document.addEventListener("keyup", function(e) {
   
    if (e.key == "ArrowRight" && digitX < box.clientWidth - circle.offsetWidth) {
        digitX += 20;
        circle.style.left = digitX + "px";
    }
    if (e.key == "ArrowLeft" && digitX > 0) {
        digitX -= 20;
        circle.style.left = digitX + "px";
    }
    if (e.key == "ArrowUp" && digitY > 0) {
        digitY -= 20;
        circle.style.top = digitY + "px";
    }
    if (e.key == "ArrowDown" && digitY < box.clientHeight - circle.offsetHeight) {
        digitY += 20;
        circle.style.top = digitY + "px";
    }
})
document.addEventListener("keydown", function(e) {
   
    if (e.key == "ArrowRight" && digitX < box.clientWidth - circle.offsetWidth) {
        digitX += 20;
        circle.style.left = digitX + "px";
    }
    if (e.key == "ArrowLeft" && digitX > 0) {
        digitX -= 20;
        circle.style.left = digitX + "px";
    }
    if (e.key == "ArrowUp" && digitY > 0) {
        digitY -= 20;
        circle.style.top = digitY + "px";
    }
    if (e.key == "ArrowDown" && digitY < box.clientHeight - circle.offsetHeight) {
        digitY += 20;
        circle.style.top = digitY + "px";
    }
})


