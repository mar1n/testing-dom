const { addNewUser, checkFormValues } = require("./domController");

const form = document.getElementById("input-container");
form.addEventListener("submit", addNewUser);
form.addEventListener("input", checkFormValues);

checkFormValues();