const { addNewUser, handleAddEmail } = require("./domController");

const form = document.getElementById("input-container");
form.addEventListener("submit", addNewUser);
const emailInput = document.querySelector(`input[name="email"]`);
emailInput.addEventListener("input", handleAddEmail);