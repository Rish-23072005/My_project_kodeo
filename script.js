// script.js
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Replace with your own login logic here
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if the login is successful (e.g., validate credentials)
        if (username === "your_username" && password === "your_password") {
            // Redirect to the home page (change 'home.html' to your actual home page)
            window.location.href = "home.html";
        } else {
            alert("Login failed. Please check your username and password.");
        }
    });
});
