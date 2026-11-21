
function getUsers() {
    var data = localStorage.getItem("users");

    if (data == null) {
        return [];
    }

    return JSON.parse(data);
}


// REGISTER USER
function registerUser() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim().toLowerCase();
    var mobile = document.getElementById("mobile").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var role = document.getElementById("role").value;
    var error = document.getElementById("registerError");

    if (
        name == "" ||
        email == "" ||
        mobile == "" ||
        password == "" ||
        confirmPassword == ""
    ) {
        error.innerText = "Please fill all the fields";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.innerText = "Enter a valid email";
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        error.innerText = "Mobile number must be 10 digits";
        return;
    }

    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters";
        return;
    }

    if (password != confirmPassword) {
        error.innerText = "Passwords do not match";
        return;
    }

    var users = getUsers();

    for (var i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() == email) {
            error.innerText = "This email is already registered";
            return;
        }
    }

    users.push({
        name: name,
        email: email,
        mobile: mobile,
        password: password,
        role: role
    });

    localStorage.setItem("users", JSON.stringify(users));

    error.innerText = "";

    alert("Registration successful! Now login.");

    window.location.href = "login.html";
}


// LOGIN USER
function loginUser() {
    var email = document.getElementById("loginEmail").value.trim().toLowerCase();
    var password = document.getElementById("loginPassword").value;
    var error = document.getElementById("loginError");

    if (email == "" || password == "") {
        error.innerText = "Enter email and password";
        return;
    }

    var users = getUsers();
    var foundUser = null;

    for (var i = 0; i < users.length; i++) {
        if (
            users[i].email.toLowerCase() == email &&
            users[i].password == password
        ) {
            foundUser = users[i];
            break;
        }
    }

    if (foundUser == null) {
        error.innerText = "Wrong email or password";
        return;
    }

    error.innerText = "";

    // Save current logged-in user for this browser
    localStorage.setItem("loggedInUser", JSON.stringify({
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role
    }));

    // Each role has its own dashboard
    var dashboards = {
        User: "userdashboard.html",
        Volunteer: "volunteerdashboard.html",
        Donor: "donordashboard.html"
    };

    window.location.href = dashboards[foundUser.role] || "userdashboard.html";
}


// SHOW REGISTRATION FORM
function showRegister() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "block";

    var error = document.getElementById("registerError");

    if (error) {
        error.innerText = "";
    }
}


// SHOW LOGIN FORM
function showLogin() {
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";

    var error = document.getElementById("loginError");

    if (error) {
        error.innerText = "";
    }
}


// MOBILE NAVIGATION MENU + LOGIN/DASHBOARD LINKS
document.addEventListener("DOMContentLoaded", function () {

    // If someone is logged in, show Dashboard / Logout instead of Login / Register
    try {
        var current = JSON.parse(localStorage.getItem("loggedInUser"));
        var loginLink = document.querySelector("nav .login-btn");
        var registerLink = document.querySelector("nav .register-btn");

        if (current && current.email && loginLink && registerLink) {
            var dashboardPages = {
                User: "userdashboard.html",
                Volunteer: "volunteerdashboard.html",
                Donor: "donordashboard.html"
            };

           loginLink.textContent = "Hello, " + current.name;
            loginLink.href = dashboardPages[current.role] || "userdashboard.html";

            registerLink.textContent = "Logout";
            registerLink.href = "#";
            registerLink.addEventListener("click", function (e) {
                e.preventDefault();
                localStorage.removeItem("loggedInUser");
                window.location.href = "login.html";
            });
        }
    } catch (err) {}

  var menuBtn = document.getElementById("menubtn");
  var navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("show");

            var isOpen = navMenu.classList.contains("show");

            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

            menuBtn.setAttribute("aria-expanded", isOpen);
        });

        var navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("show");
                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.setAttribute("aria-label", "Open menu");
            });
        });
    }
});
  // ADMIN CODE
function adminLogin() {
  var email = document.getElementById("adminEmail").value.trim();
  var password = document.getElementById("adminPassword").value;
  var error = document.getElementById("adminError");

  if (email === "admin@ngo.com" && password === "admin123") {
    localStorage.setItem("adminLoggedIn", "true");
    window.location.href = "admindashboard.html";
  } else {
    error.textContent = "Wrong admin email or password.";
  }
}

function adminLogout() {
  localStorage.removeItem("adminLoggedIn");
  window.location.href = "admin.html";
}

console.log("NGO JavaScript loaded");
console.log("Login function:", typeof loginUser);