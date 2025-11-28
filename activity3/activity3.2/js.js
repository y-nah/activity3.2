function validate(inputId, errorId) {
  const input = document.getElementById(inputId);
  const errorText = document.getElementById(errorId);

  if (input.value.trim() === "") {
    errorText.classList.remove("hidden");
    input.classList.add("border-red-500");
    return false;
  } else {
    errorText.classList.add("hidden");
    input.classList.remove("border-red-500");
    return true;
  }
}

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const validUser = validate("loginUser", "loginUserError");
  const validPass = validate("loginPass", "loginPassError");

  if (validUser && validPass) {
    alert("Login successful!");
  }
});
