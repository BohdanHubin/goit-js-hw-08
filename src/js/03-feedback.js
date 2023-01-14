import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);



const formData = {
    email: '',
    message: '',};



function onFormData (event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm (event) {
    event.preventDefault();
    if (email.value && message.value) {
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
        event.currentTarget.reset();
        localStorage.removeItem('feedback-form-state');
    }
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();




