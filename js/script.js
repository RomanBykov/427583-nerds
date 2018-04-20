'use strict';

var openPopup = document.querySelector('.contacts-btn');
var popup = document.querySelector('.modal');
var closePopup = popup.querySelector('.modal-close');
var login = popup.querySelector('[name=feedback-name]');
var form = popup.querySelector('.modal-form');
var email = form.querySelector('[type=email]');
var storage = '';
var isStorageSupport = true;

var showPopup = function() {
  popup.classList.add('modal-show');
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
};

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
    }
  }
});

openPopup.addEventListener('click', function() {
  showPopup();
});

openPopup.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 32 || evt.keyCode === 13) {
    showPopup();
  }
});

closePopup.addEventListener('click', function(evt) {
  popup.classList.remove('modal-show');
});

form.addEventListener('submit', function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', login.value);
    }
  }
});
