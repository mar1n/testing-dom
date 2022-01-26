const { userRegister, state } = require("./userController");

function addNewUser(event) {
    event.preventDefault();

    const { email, password } = event.target.elements;
    userRegister(email.value, password.value);
}

module.exports = { addNewUser }