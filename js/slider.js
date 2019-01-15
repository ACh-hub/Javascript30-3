const slider = document.getElementById("hue");
const image = document.querySelector("img");

slider.setAttribute("min","0");
slider.setAttribute("max","360");
slider.setAttribute("step","1");

hue.oninput = function() {
    let hueRotation = `${hue.value}deg`
    image.style.setProperty('--hue-rotate', hueRotation);
}