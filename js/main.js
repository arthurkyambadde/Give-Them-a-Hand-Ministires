/**
 * This file will contain scripts to run dynamic manipulations and state management
 *  for the application.
 */

const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const loginBtn = document.getElementById("logIn-btn");
const registerBtn = document.getElementById("register-btn");

const videoPlayer = document.getElementById("video-container");
const video = document.getElementById("video");
const playButton = document.getElementById("play-btn");

function register() {
  loginForm.style.left = "450px";
  registerForm.style.left = "-425px";
  loginBtn.style.background = "transparent";
  registerBtn.style.background = "#f3c693";
}
function login() {
  loginForm.style.left = "40px";
  registerForm.style.left = "325px;";
  loginBtn.style.background = "#f3c693";
  registerBtn.style.background = "transparent";
}

const modal = document.getElementById("login-form");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

playButton.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
