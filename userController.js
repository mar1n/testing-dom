const state = { users: {} };

function userRegister(userName, password) {
  if (typeof userName === "string" && typeof password === "string") {
    state.users["userName"] = userName;
    state.users["password"] = password;

    const confirmMsg = window.document.createElement('p');
    confirmMsg.id = "user-name-complete";
    confirmMsg.innerHTML = `${userName} created account`;
    window.document.body.appendChild(confirmMsg);

    return true;
  }
}

module.exports = { userRegister, state };
