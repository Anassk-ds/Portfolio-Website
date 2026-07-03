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

let aboutChanged = false;

function changeAbout() {

    if (!aboutChanged) {

        aboutText.innerHTML =
        "I am SHAIK ANAS, a passionate Data Science student who enjoys building real-world web applications, Python projects, Machine Learning models and continuously learning new technologies.";

        aboutChanged = true;

    } else {

        aboutText.innerHTML =
        "I am SHAIK ANAS, a B.Tech Data Science student at Chalapathi Institute of Technology with knowledge of Python, SQL, Data Analysis, Machine Learning and DBMS.";

        aboutChanged = false;

    }

}
// =============================
// CHANGE PAGE TITLE
// =============================

let titleChanged = false;

function changeTitle(){

    if(!titleChanged){

        document.title = "SHAIK ANAS | Data Science Portfolio";
        alert("Website title changed!");

    }else{

        document.title = "SHAIK ANAS | Portfolio";
        alert("Website title restored!");

    }

    titleChanged = !titleChanged;

}

// =============================
// ADD NEW PROJECT
// =============================

function addProject(){

    if(document.getElementById("expenseProject")){

        alert("Project already added!");

        return;

    }

    const article=document.createElement("article");

    article.id="expenseProject";

    article.innerHTML=`

    <h3>Expense Tracker</h3>

    <p><b>Technologies:</b> HTML, CSS, JavaScript</p>

    <p>
    A web application to manage income and expenses using Local Storage.
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
let skillColor = false;

function changeSkillsColor(){

    if(!skillColor){

        skillsSection.style.background="#dbeafe";

        skillColor=true;

    }else{

        skillsSection.style.background="white";

        skillColor=false;

    }

}

// =============================
// INCREASE HEADING SIZE
// =============================

let headingLarge=false;

function increaseHeading(){

    headings.forEach(function(heading){

        heading.style.fontSize=
        headingLarge?"30px":"38px";

    });

    headingLarge=!headingLarge;

}

// =============================
// HIGHLIGHT ACTIVE NAVIGATION
// =============================

navLinks.forEach(link => {

    link.addEventListener("click", function(event){

        navLinks.forEach(nav => nav.classList.remove("active"));

        event.target.classList.add("active");

        alert("You clicked: " + event.target.innerText);

    });

});
// =============================
// CHARACTER COUNTER
// =============================

const message = document.getElementById("message");
const charCount = document.getElementById("charCount");

message.addEventListener("input", function () {

    charCount.textContent = message.value.length;

});

// =============================
// CONTACT FORM VALIDATION
// =============================
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    let valid = true;

    if(name === ""){
        document.getElementById("nameError").textContent = "Name cannot be empty";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        document.getElementById("emailError").textContent = "Enter a valid email";
        valid = false;
    }

    if(!/^\d{10}$/.test(phone)){
        document.getElementById("phoneError").textContent = "Phone must contain exactly 10 digits";
        valid = false;
    }

    if(message.length < 20){
        document.getElementById("messageError").textContent = "Message must contain at least 20 characters";
        valid = false;
    }

    if(valid){

       showSuccessMessage(success);

        form.reset();

        charCount.textContent = "0";
    }

});
function showSuccessMessage(callback){

    callback();

}

function success(){

    alert("Form submitted successfully!");

}

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

function updateClock(){

    const now = new Date();

    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');

    document.getElementById("clock").innerHTML =
    `${hours}:${minutes}:${seconds}`;

}

updateClock();

setInterval(updateClock,1000);

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
window.addEventListener("load", function(){

    setTimeout(function(){

        const welcome = document.getElementById("welcomeMessage");

        welcome.style.display = "block";

        setTimeout(function(){

            welcome.style.display = "none";

        },3000);

    },3000);

});

// =============================
// DEFAULT QUOTE
// =============================

showQuote();

function uploadResume(){

    const resumePromise = new Promise(function(resolve,reject){

        const uploaded = true;

        setTimeout(function(){

            if(uploaded){

                resolve("Resume uploaded successfully!");

            }else{

                reject("Resume upload failed!");

            }

        },2000);

    });

    resumePromise
    .then(function(message){

        alert(message);

    })
    .catch(function(error){

        alert(error);

    });

}

function fetchPortfolioInfo(){

    return new Promise(function(resolve){

        setTimeout(function(){

            resolve(
                "I am SHAIK ANAS, a B.Tech Data Science student skilled in Python, SQL, Machine Learning, Data Analysis, HTML, CSS and JavaScript."
            );

        },2000);

    });

}

async function loadPortfolioInfo(){

    try{

        document.getElementById("portfolioInfo").innerHTML =
        "Loading...";

        const data = await fetchPortfolioInfo();

        document.getElementById("portfolioInfo").innerHTML =
        data;

    }

    catch(error){

        document.getElementById("portfolioInfo").innerHTML =
        "Error loading portfolio information.";

    }

}
