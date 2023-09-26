
var button = document.getElementById("education")
button.addEventListener("click",showEducation)

var button = document.getElementById("experience")
button.addEventListener("click",showExperience)

var button = document.getElementById("skills")
button.addEventListener("click",showSkills)

var button = document.getElementById("name")
button.addEventListener("click",showGeneral_Info)

function showEducation() {
    document.getElementById("detailedEducation").style.display = "block"
    document.getElementById("detailedExperience").style.display = "none"
    document.getElementById("detailedSkills").style.display = "none"
    document.getElementById("general_info").style.display = "none"
}

function showExperience() {
    document.getElementById("detailedEducation").style.display = "none"
    document.getElementById("detailedExperience").style.display = "block"
    document.getElementById("detailedSkills").style.display = "none"
    document.getElementById("general_info").style.display = "none"
}

function showSkills() {
    document.getElementById("detailedEducation").style.display = "none"
    document.getElementById("detailedExperience").style.display = "none"
    document.getElementById("detailedSkills").style.display = "block"
    document.getElementById("general_info").style.display = "none"
}

function showGeneral_Info(){
    document.getElementById("detailedEducation").style.display = "none"
    document.getElementById("detailedExperience").style.display = "none"
    document.getElementById("detailedSkills").style.display = "none"
    document.getElementById("general_info").style.display = "block"
}
