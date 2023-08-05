const submitButton = document.getElementById('submit');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('fullname');
const messageInput = document.getElementById('message');
const submissionMessage = document.getElementById('displayed-message');

const formValidation = (event) => {
    event.preventDefault();

     if (messageInput.value === "" && nameInput.value === "" && emailInput.value === ""){
        alert('Please fill out the form with your details');
        return false; 
    }
    
    if (emailInput.value === "" || !emailInput.value.includes('@')) {
        alert('Please enter a valid email address');
        return false; 
    }

    if (nameInput.value === "") {
        alert('Please enter your name');
        return false; 
    }

    if (messageInput.value === "") {
        alert('Please enter your message');
        return false; 
    } 

    submissionMessage.classList.add('form-message-shown');
    submitButton.style.display= "none";
    return true;
};

submitButton.addEventListener('click', function(event) {
    formValidation(event);
});