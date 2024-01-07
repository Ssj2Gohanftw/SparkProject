function toggleForm() {
  var loginForm = document.getElementById("login-form");
  var signupForm = document.getElementById("signup-form");
  var formTitle = document.getElementById("form-title");

  if (loginForm.style.display === "flex") {
    loginForm.style.display = "none";
    signupForm.style.display = "flex";
    formTitle.innerText = "Sign Up";
  } else {
    loginForm.style.display = "flex";
    signupForm.style.display = "none";
    formTitle.innerText = "Login";
  }
}
