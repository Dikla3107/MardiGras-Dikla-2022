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




/* forwarding to sponser page when clicking the cards */

function NewTabmod() {
        window.open(
                "http://www.museumofdeath.net/", "_blank");
}

function NewTabsh() {
        window.open(
                "https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/overview/", "_blank");
}

function NewTabtrc() {
        window.open(
                "https://www.ritzcarlton.com/en/hotels/new-orleans", "_blank");
}

function NewTabwa() {
        window.open(
                "https://walk-ons.com/", "_blank");
}

function NewTabpp() {
        window.open(
                "https://www.premiumparking.com/P402", "_blank");
}

function NewTablcm() {
        window.open(
                "https://lcm.org/", "_blank");
}

function NewTabHM() {
        window.open(
                "http://www.bloodymarystours.com/?y_source=1_MjU0MDYxNzItNzE1LWxvY2F0aW9uLndlYnNpdGU=", "_blank");
}

function NewTabAH() {
        window.open(
                "https://acehotel.com/new-orleans/", "_blank");
}

/* Carusele */

let slideIndex = 0;
showSlides();

function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex >
                slides.length) {
                slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
}
