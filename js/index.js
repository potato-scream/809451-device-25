var link = document.querySelector(".contacts__interactive-link");
var popup = document.querySelector(".modal-contact");
var contactClose = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var username = popup.querySelector(".contact-form__input--name");
var mail = popup.querySelector(".contact-form__input--mail");
var text = popup.querySelector(".contact-form__input--text");

var mapLink = document.querySelector(".contacts__map");
var map = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-close--map");

var isStorageSupport = true;
var storage = "";



mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("modal-show");
});

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        username.value = storage;
        mail.focus();
    } else {
        username.focus();
    }  
});

contactClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!username.value || !mail.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }   else {
        if (isStorageSupport) {
        localStorage.setItem("name", username.value);
        }
        if (isStorageSupport) {
            localStorage.setItem("mail", mail.value);
        } 
    } 
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classLisr.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});

// SLIDER

var bigSlide1 = document.querySelector(".slide-first");
var bigSlide2 = document.querySelector(".slide-second");
var bigSlide3 = document.querySelector(".slide-third");

var bigSlideBtn1 = document.querySelector(".slider__toggle--first");
var bigSlideBtn2 = document.querySelector(".slider__toggle--second");
var bigSlideBtn3 = document.querySelector(".slider__toggle--third");

bigSlideBtn1.addEventListener("click", function (evt) {
    bigSlide1.classList.add("slide--active");
    bigSlide2.classList.remove("slide--active");
    bigSlide3.classList.remove("slide--active");

    bigSlideBtn1.classList.add("slider__toggle--active");
    bigSlideBtn2.classList.remove("slider__toggle--active");
    bigSlideBtn3.classList.remove("slider__toggle--active");
});

bigSlideBtn2.addEventListener("click", function (evt) {
    bigSlide2.classList.add("slide--active");
    bigSlide1.classList.remove("slide--active");
    bigSlide3.classList.remove("slide--active");

    bigSlideBtn2.classList.add("slider__toggle--active");
    bigSlideBtn1.classList.remove("slider__toggle--active");
    bigSlideBtn3.classList.remove("slider__toggle--active");

});

bigSlideBtn3.addEventListener("click", function (evt) {
    bigSlide3.classList.add("slide--active");
    bigSlide1.classList.remove("slide--active");
    bigSlide2.classList.remove("slide--active");

    bigSlideBtn3.classList.add("slider__toggle--active");
    bigSlideBtn2.classList.remove("slider__toggle--active");
    bigSlideBtn1.classList.remove("slider__toggle--active");
});


// SLIDER-SERVICES

var smallSlide1 = document.querySelector(".slider-services__slide--delivery");
var smallSlide2 = document.querySelector(".slider-services__slide--warranty");
var smallSlide3 = document.querySelector(".slider-services__slide--credit");

var smallSlideBtn1 = document.querySelector(".slider-services__toggle--first");
var smallSlideBtn2 = document.querySelector(".slider-services__toggle--second");
var smallSlideBtn3 = document.querySelector(".slider-services__toggle--third");

smallSlideBtn1.addEventListener("click", function (evt) {
    smallSlide1.classList.add("slider-services__slide--active");
    smallSlide2.classList.remove("slider-services__slide--active");
    smallSlide3.classList.remove("slider-services__slide--active");

    smallSlideBtn1.classList.add("slider-services__toggle--active");
    smallSlideBtn2.classList.remove("slider-services__toggle--active");
    smallSlideBtn3.classList.remove("slider-services__toggle--active");
});

smallSlideBtn2.addEventListener("click", function (evt) {
    smallSlide2.classList.add("slider-services__slide--active");
    smallSlide1.classList.remove("slider-services__slide--active");
    smallSlide3.classList.remove("slider-services__slide--active");

    smallSlideBtn2.classList.add("slider-services__toggle--active");
    smallSlideBtn1.classList.remove("slider-services__toggle--active");
    smallSlideBtn3.classList.remove("slider-services__toggle--active");
});

smallSlideBtn3.addEventListener("click", function (evt) {
    smallSlide3.classList.add("slider-services__slide--active");
    smallSlide2.classList.remove("slider-services__slide--active");
    smallSlide1.classList.remove("slider-services__slide--active");

    smallSlideBtn3.classList.add("slider-services__toggle--active");
    smallSlideBtn2.classList.remove("slider-services__toggle--active");
    smallSlideBtn1.classList.remove("slider-services__toggle--active");
});