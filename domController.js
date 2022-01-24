const { userRegister, state } = require("./userController");

function addNewUser(event) {
    event.preventDefault();

    const { name, password } = event.target.elements;
    userRegister(name.value, password.value);
}

module.exports = addNewUser