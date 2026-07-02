// DOM Selection

const about = document.getElementById("about");
const projects = document.getElementById("projectContainer");

// Change About Me
function changeAbout() {

    about.querySelector("p").innerHTML =
    "I am a passionate Data Science student with strong skills in Python, SQL, HTML, CSS and JavaScript. I enjoy building real-world projects and continuously learning new technologies.";

}

// Change Website Title
function changeTitle() {

    document.title = "SHAIK ANAS | Data Science Portfolio";

}

// Add New Project
function addProject() {

    const project = document.createElement("div");

    project.className = "card";

    project.innerHTML = `
        <h3>💰 Expense Tracker</h3>

        <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>

        <p>
        Developed an Expense Tracker that allows users to add,
        delete and manage income and expenses using Local Storage.
        </p>
    `;

    projects.appendChild(project);

}

// Show / Hide Projects
function toggleProjects() {
    let projects = document.getElementById("projects");

    if (projects.style.display === "none") {
        projects.style.display = "block";
    } else {
        projects.style.display = "none";
    }
}
const message = document.getElementById("message");
const charCount = document.getElementById("charCount");

message.addEventListener("keyup", function () {
    charCount.innerText = message.value.length;
});
// ===============================
// Highlight Navigation Link
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(item=>{
            item.style.background="transparent";
            item.style.color="white";
        });

        this.style.background="#2563eb";
        this.style.color="white";

    });

});


// ===============================
// Change Skills Background
// ===============================

function changeSkillsColor(){

    const skills = document.getElementById("skills");

    skills.style.background="#dbeafe";

}


// ===============================
// Increase Heading Size
// ===============================

function increaseHeading(){

    const headings = document.querySelectorAll(".section-title");

    headings.forEach(heading=>{

        let size = parseInt(window.getComputedStyle(heading).fontSize);

        heading.style.fontSize=(size+4)+"px";

    });

}


// ===============================
// Theme Switcher
// ===============================

function toggleTheme(){

    document.body.classList.toggle("dark-mode");

}
// ===============================
// Change Profile Image
// ===============================

function changeProfileImage(){

    const image = document.getElementById("profileImage");
    const option = document.getElementById("profileSelect").value;

    if(option === "formal"){
        image.src = "formal.jpg";
    }
    else if(option === "casual"){
        image.src = "casual.jpg";
    }
    else{
        image.src = "profile.jpg";
    }

}


// ===============================
// Live Character Counter
// ===============================

function characterCount(){

    const message = document.getElementById("message");
    const count = document.getElementById("count");

    count.innerHTML =
    "Characters : " + message.value.length;

}


// ===============================
// Contact Form Validation
// ===============================

function validateForm(event){

    event.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const message =
    document.getElementById("message").value.trim();

    if(name==="" || email==="" || message===""){

        alert("Please fill all the fields.");

        return false;

    }

    alert("Message Sent Successfully!");

    return true;

}


// ===============================
// Light Bulb Toggle
// ===============================

function bulbToggle(){

    const bulb = document.getElementById("bulb");

    if(bulb.src.includes("bulb-off")){

        bulb.src="bulb-on.png";

    }
    else{

        bulb.src="bulb-off.png";

    }

}
// ======================================
// Dynamic Welcome Message
// ======================================

window.onload = function(){

    alert("Welcome to SHAIK ANAS's Portfolio Website!");

    showDateTime();

    updateClock();

};


// ======================================
// Current Date & Time
// ======================================

function showDateTime(){

    const date = new Date();

    const dateBox = document.getElementById("dateTime");

    if(dateBox){

        dateBox.innerHTML =
        "<b>Date & Time:</b> " + date.toLocaleString();

    }

}


// ======================================
// Digital Clock
// ======================================

function updateClock(){

    const clock = document.getElementById("clock");

    if(clock){

        setInterval(function(){

            const now = new Date();

            clock.innerHTML =
            "<b>Current Time:</b> " +
            now.toLocaleTimeString();

        },1000);

    }

}


// ======================================
// Random Quote Generator
// ======================================

const quotes=[

"Believe in yourself.",
"Learning never stops.",
"Code. Debug. Repeat.",
"Success comes from consistency.",
"Dream big and work hard."

];

function showQuote(){

    const random=Math.floor(Math.random()*quotes.length);

    const quote=document.getElementById("quote");

    if(quote){

        quote.innerHTML=
        "<b>Quote:</b> "+quotes[random];

    }

}


// ======================================
// Scroll to Top
// ======================================

function scrollTopPage(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

