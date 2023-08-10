const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const signinButton = document.getElementById('submit');

const loginUser = (event) => {
    event.preventDefault();

    const userDataString = localStorage.getItem("userData");
    const userData = JSON.parse(userDataString);
    const loggedInUser = userData.find(user => user.email === usernameInput.value && user.password === passwordInput.value);

    if (loggedInUser){
        localStorage.setItem('authStatus', 'authenticated');
        window.location.href="/Pages/dashboard.html";
    }
    else{
        alert('Please enter valid login credentials');
    }
};

signinButton.addEventListener("click", function(event){
    loginUser(event);
})