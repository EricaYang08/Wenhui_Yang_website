
    var Wisconsin = document.getElementById("Wisconsin_image");
    var Wisconsin_image = ["image/Wisconsin.jpg", "image/Bucky.png"];
    var startIndex = 0;
 
    var purdue = document.getElementById("Purdue_image");
    var Purdue_image = ["image/Purdue.png", "image/Purdue_Pete.jpg"];
    var startIndex2 = 0;


    Wisconsin.addEventListener("click", Wisconsin_next);
    purdue.addEventListener("click", Purdue_next);

    function Wisconsin_next() {
        startIndex += 1;
        startIndex = startIndex % Wisconsin_image.length;
        Wisconsin.src = Wisconsin_image[startIndex];
    }



    function Purdue_next() {
        startIndex2 += 1;
        startIndex2 = startIndex2 % Purdue_image.length;
        purdue.src = Purdue_image[startIndex2];
        purdue.style.animation = "fadeIn 3s"
        

    }

