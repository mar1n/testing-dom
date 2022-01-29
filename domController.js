const { userRegister, state } = require("./userController");

function addNewUser(event) {
    event.preventDefault();

    const { email, password } = event.target.elements;
    userRegister(email.value, password.value);
}

const validEMail = (email) => /^\w+@\w+[.]\w+$/.test(email);

const handleAddEmail = (event) => {
    const emailValue = event.target.value;

    const errorMSg = window.document.getElementById("error-email");

    if(emailValue === "") {
        errorMSg.innerHTML = "";
    } else if(!validEMail(emailValue)) {
        errorMSg.innerHTML = "Emial is invalid!"
    } else {
        errorMSg.innerHTML = `${emailValue} is valid format.`
    }

}

module.exports = { addNewUser, handleAddEmail }