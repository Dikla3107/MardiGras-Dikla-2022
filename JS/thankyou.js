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
