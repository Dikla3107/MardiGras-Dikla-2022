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



/* Form- contact */
const form = document.querySelector('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'formControl error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'formControl success';

}

form.addEventListener('submit', (event) => {
    if (userName.value == '') {
        event.preventDefault();
        showError(userName, 'User Name is Required!');
    } else {
        showSuccess(userName);
    }
    if (email.value == '' || email.value.indexOf('@') == -1) {
        event.preventDefault();
        showError(email, 'Email is Required!');

    } else {
        showSuccess(email);
    }
    if (password.value == '') {
        event.preventDefault();
        showError(password, 'Password is Required!');

    } else {
        showSuccess(password);
    }
    if (password2.value == '' || password2.value !== password.value) {
        event.preventDefault();
        showError(password2, 'Confirm Password!');
    } else {
        showSuccess(password2);
    }
});