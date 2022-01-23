function userRegister(userName, password) {
    if(typeof userName === 'string' && typeof password === 'string') {
        return true
    }
}

module.exports = userRegister;