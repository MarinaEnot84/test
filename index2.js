const form = document.getElementById("form");
const username = document.getElementById("username");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const date = document.getElementById("date");

const input = document.querySelectorAll("input");
const button = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
  test();
});

const test = () => {
  for (const i = 0; i < input.length; i++) {
    if (input[i].value == "") {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = " ";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase());
};

const isValidPassword = (password) => {
  const ps =
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
  return ps.test(String(password));
};

const isValidDate = (date) => {
  const myBirthday = new Date(date);
  const currentDate = new Date().toJSON().slice(0, 10) + "01:00:00";
  const myAge = ~~((Date.now(currentDate) - myBirthday) / 31557600000);

  if (myAge > 18) {
    return true;
  } else {
    return false;
  }
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const surnameValue = surname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === " ") {
    setError(username, "Username is required.");
  } else {
    setSuccess(username);
  }
  if (surnameValue === " ") {
    setError(surname, "Surname is required.");
  } else {
    setSuccess(surname);
  }

  if (emailValue === " ") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address.");
  } else {
    setSuccess(email);
  }
  if (passwordValue === " ") {
    setError(password, "Password is required");
  } else if (!isValidPassword(passwordValue)) {
    setError(password, "Provide a valid password.");
  } else {
    setSuccess(password);
  }
  if (password2Value === " ") {
    setError(password2, "Please confirm your password.");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
  if (!isValidDate(date)) {
    setError(date, "You are not 18 and are denied registration.");
  } else {
    setSuccess(date);
  }
};
