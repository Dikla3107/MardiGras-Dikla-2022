/* Countdown */

const daysValue = document.getElementById('days');
const hoursValue = document.getElementById('hours');
const minValue = document.getElementById('min');
const secValue = document.getElementById('sec');
const countDownDateTime = new Date(2023, 2, 23, 0, 0, 0).getTime();


function countDown() {
    const dateTimeNow = new Date().getTime();
    let difference = countDownDateTime - dateTimeNow;

    //days
    const daysValueNumber = Math.floor(difference / (1000 * 60 * 60 * 24));
    //hours
    const hoursValueNumber = Math.floor(difference / (1000 * 60 * 60) % 24);
    // min
    const minValueNumber = Math.floor(difference / (1000 * 60) % 60);
    //sec
    const secValueNumber = Math.floor(difference / (1000) % 60);

    daysValue.innerHTML = daysValueNumber;
    hoursValue.innerHTML = hoursValueNumber;
    minValue.innerHTML = minValueNumber;
    secValue.innerHTML = secValueNumber;

    console.log(daysValueNumber, hoursValueNumber, minValueNumber, secValueNumber);

}
setInterval(countDown, 1000);





/* accordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active"); 
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
} 
var acc = document.getElementsByClassName("accordion2");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
var acc = document.getElementsByClassName("accordion3");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
