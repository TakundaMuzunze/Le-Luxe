const registerButton = document.getElementById('register');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('fullname');
const passwordInput = document.getElementById('password');

const createAccount = (event) => {
    event.preventDefault();

     if (passwordInput.value === "" && nameInput.value === "" && emailInput.value === ""){
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

    if (passwordInput.value === "" || passwordInput.value.length < 8) {
        alert('Please enter a valid password');
        return false; 
    } 
};

registerButton.addEventListener('click', function(event) {
    createAccount(event);
});