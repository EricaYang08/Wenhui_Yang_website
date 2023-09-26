
var Wisconsin = document.getElementById("Wisconsin_image");
var Wisconsin_image = ["image/Wisconsin.jpg", "image/Bucky.png"];
var startIndex = 0;

var purdue = document.getElementById("Purdue_image");
var Purdue_image = ["image/Purdue_Pete.jpg", "image/Purdue.png"];
var startIndex2 = 0;


Wisconsin.addEventListener("animationstart", myStartFunction);
Wisconsin.addEventListener("animationiteration", myRepeatFunction);

purdue.addEventListener("animationstart", myStartFunction);
purdue.addEventListener("animationiteration", myRepeatFunction);

function Wisconsin_next() {
    startIndex += 1;
    startIndex = startIndex % Wisconsin_image.length;
    Wisconsin.src = Wisconsin_image[startIndex];
}

function Purdue_next() {
    startIndex2 += 1;
    startIndex2 = startIndex2 % Purdue_image.length;
    purdue.src = Purdue_image[startIndex2];
}
