const { addNewUser } = require("./domController");

const form = document.getElementById("input-container");
form.addEventListener("submit", addNewUser);