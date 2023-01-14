import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', submitForm);

function onFormData () {
   const formData = { email: email.value, message: message.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitForm (event) {
    event.preventDefault();
    if (email.value && message.value) {
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
        event.currentTarget.reset();
        localStorage.removeItem('feedback-form-state');
    }
}

(function dataLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    data.email ? (email.value = data.email) : {};
    data.message ? (message.value = data.message) : {};
  }
})();




