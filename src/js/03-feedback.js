import throttle from 'lodash.throttle';

const formFeadback = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};
populateTextarea();


formFeadback.addEventListener('submit', onFormSubmit);
formFeadback.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    const message = JSON.stringify(formData)
    localStorage.setItem(STORAGE_KEY, message);
    
};

function onFormSubmit(e) {
    e.preventDefault();
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        console.log(savedData);
    }
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
};

function populateTextarea(e) {
    
    const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    
    if(saveData) {
        formData = saveData;
        formFeadback.email.value = formData.email || '';
        formFeadback.message.value = formData.message || '';
    }
};

