// =============================
// DOM SELECTION
// =============================

const aboutText = document.getElementById("aboutText");
const profileImage = document.getElementById("profileImage");
const skillsSection = document.getElementById("skills");
const projectContainer = document.getElementById("projectContainer");
const headings = document.querySelectorAll("h2");
const navLinks = document.querySelectorAll("nav a");
const heroHeading = document.querySelector(".hero h1");
heroHeading.style.color = "#facc15";

// =============================
// CHANGE ABOUT TEXT
// =============================

function changeAbout() {

aboutText.innerHTML =
"I am SHAIK ANAS, a passionate Data Science student who enjoys building real-world web applications, Python projects, Machine Learning models, and continuously learning new technologies.";

}

// =============================
// CHANGE PAGE TITLE
// =============================

function changeTitle(){

document.title =
"SHAIK ANAS | Data Science Portfolio";

alert("Website title changed successfully!");

}

// =============================
// ADD NEW PROJECT
// =============================

function addProject(){

const article = document.createElement("article");

article.innerHTML = `

<h3>Expense Tracker</h3>

<p><b>Technologies:</b>
HTML, CSS, JavaScript
</p>

<p>
A web application to manage income and expenses with Local Storage support.
</p>

`;

projectContainer.appendChild(article);

}

// =============================
// SHOW / HIDE PROJECTS
// =============================

function toggleProjects() {

    const projectContainer = document.getElementById("projectContainer");

    if (projectContainer.style.display === "none") {

        projectContainer.style.display = "block";

    } else {

        projectContainer.style.display = "none";

    }

}

// =============================
// PROFILE IMAGE SWITCHER
// =============================

function changeProfileImage(){

const value =
document.getElementById("profileSelect").value;

if(value==="formal"){

profileImage.src="formal.jpg";

}

else if(value==="casual"){

profileImage.src="casual.jpg";

}

else{

profileImage.src="profile.jpg";

}

}

// =============================
// CHANGE SKILLS BACKGROUND
// =============================

function changeSkillsColor(){

skillsSection.style.background="#dbeafe";

}

// =============================
// INCREASE HEADING SIZE
// =============================

function increaseHeading(){

headings.forEach((heading)=>{

heading.style.fontSize="35px";

});

}

// =============================
// HIGHLIGHT ACTIVE NAVIGATION
// =============================

navLinks.forEach((link)=>{

link.addEventListener("click",function(){

navLinks.forEach((nav)=>{

nav.classList.remove("active");

});

this.classList.add("active");

});

});
// =============================
// CHARACTER COUNTER
// =============================

const message = document.getElementById("message");
const charCount = document.getElementById("charCount");

message.addEventListener("keyup", function () {

    charCount.textContent = message.value.length;

});

// =============================
// CONTACT FORM VALIDATION
// =============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();

    const email = document.getElementById("contactEmail").value.trim();

    const msg = message.value.trim();

    if (name === "" || email === "" || msg === "") {

        alert("Please fill all the fields.");

        return;

    }

    alert("Message sent successfully!");

    form.reset();

    charCount.textContent = "0";

});

// =============================
// THEME SWITCHER
// =============================

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

}

// =============================
// LIGHT BULB TOGGLE
// =============================

let bulbOn = false;

function toggleBulb() {

    const bulb = document.getElementById("bulb");

    if (bulbOn) {

        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";

        bulbOn = false;

    } else {

        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";

        bulbOn = true;

    }

}

// =============================
// DIGITAL CLOCK
// =============================

function updateClock() {

    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();

// =============================
// CURRENT DATE & TIME
// =============================

function updateDateTime() {

    const now = new Date();

    document.getElementById("dateTime").innerHTML =
        now.toLocaleString();

}

setInterval(updateDateTime, 1000);

updateDateTime();
// =============================
// RANDOM QUOTES
// =============================

const quotes = [

"Success doesn't come from what you do occasionally. It comes from what you do consistently.",

"Dream big. Start small. Act now.",

"Every expert was once a beginner.",

"Believe in yourself and all that you are.",

"Learning never exhausts the mind."

];

function showQuote(){

const random =
Math.floor(Math.random()*quotes.length);

document.getElementById("quote").innerHTML =
quotes[random];

}

// =============================
// SCROLL TO TOP
// =============================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

function scrollToTop(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// =============================
// WELCOME MESSAGE
// =============================

window.addEventListener("load",function(){

setTimeout(function(){

alert("Welcome to SHAIK ANAS Portfolio");

},500);

});

// =============================
// DEFAULT QUOTE
// =============================

showQuote();
