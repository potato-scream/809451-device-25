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
