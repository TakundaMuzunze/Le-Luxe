const registerButton = document.getElementById('register');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('fullname');
const passwordInput = document.getElementById('password');

const userData = [];

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
        alert('Please enter a valid password (at least 8 characters)');
        return false; 
    } 

    const user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    };

    userData.push(user);

    // Store the updated userData array in Local Storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Redirect to the dashboard page after successful registration
    window.location.href = '/Pages/dashboard.html';
};

registerButton.addEventListener('click', function(event) {
    createAccount(event);
});