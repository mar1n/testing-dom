const { userRegister, state } = require("./userController");

function addNewUser(event) {
  event.preventDefault();

  const { email, password } = event.target.elements;
  userRegister(email.value, password.value);
}

const validEMail = (email) => /^\w+@\w+[.]\w+$/.test(email);

const checkFormValues = () => {
  const email = document.querySelector(`input[name="email"]`).value;
  const password = document.querySelector(`input[name="password"]`).value;
console.log('email', email);
  const emailIsEmpty = email === "";
  const emialIsInvaild = !validEMail(email);
  console.log('emailIsInvalid', emialIsInvaild);
  const passwordIsEmpty = password === "";

  const errorMSg = window.document.getElementById("error-email");

  if (emailIsEmpty) {
    errorMSg.innerHTML = "";
  } else if (emialIsInvaild) {
    errorMSg.innerHTML = "Email is invalid!";
  } else {
    errorMSg.innerHTML = `${email} is valid format.`;
  }

  const submitButton = document.querySelector(`button[type="submit"]`);
  if (emailIsEmpty || emialIsInvaild || passwordIsEmpty) {
    submitButton.disabled = true;
    console.log('button true');
  } else {
    console.log('button false');
    submitButton.disabled = false;
  }
};

module.exports = { addNewUser, checkFormValues };
