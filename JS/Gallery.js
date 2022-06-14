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



/* resize img gallery */
const galleryContainer = document.querySelector('.galleryC');
const gallery = galleryContainer.querySelector('.gallery');
const modal = galleryContainer.querySelector('.galleryModal');
const close = modal.querySelector('.closebutton');
const galleryItems = galleryContainer.querySelectorAll('.gallery__item');

galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        modal.classList.remove('d-none')
        const modalItem = item.cloneNode(true);
        const img = modalItem.querySelector('.gallery__img');
        img.removeAttribute('class');
        modalItem.removeAttribute('class');
        modalItem.classList.add('modalItem');
        modal.appendChild(modalItem);
    });
});
close.addEventListener('click', () => {
    modal.classList.add('d-none');
    const item = modal.querySelector('.modalItem');
    item.remove();
});
