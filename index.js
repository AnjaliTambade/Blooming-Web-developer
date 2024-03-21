


//js for toggle button working to make site responcive//

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
    sidemeu.style.right = "0";
}

function closemenu() {
    sidemeu.style.right = "-200px";
}



//about-page js//
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



//footer js//
const d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();

//contact form working script//

const scriptURL = 'https://script.google.com/macros/s/AKfycby3q9tbkl85mCV4k7xFihbV5dtW-2kIHI2fBYDgl2438apuxERTQA4o8cQRhFaXUtRD/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent siccessfully"
            setTimeout (function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
