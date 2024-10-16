class LoginValidation {
    #userName;
    #userPassword;
    setUserName(uName) { this.#userName = uName; }
    getUserName() { return this.#userName; }
    setUserPassword(uPassword) { this.#userPassword = uPassword; }
    getUserPassword() { return this.#userPassword; }
    isNull(userName, userPass) {
        let nullCheck = true;
        if (userName.value === "" || userName.value === null) { nullCheck = false; }
        if (userPass.value === "" || userPass.value === null) { nullCheck = false; }
        return nullCheck;
    }
    usernameValidation(userName, admin) {
        let userNameCheck = true;
        if (userName.value != admin.getAdminName()) { userNameCheck = false; }
        return userNameCheck;
    }
    userPasswordValidation(userPassAttr, admin) {
        let passwordCheck = true;
        if (userPassAttr.value != admin.getPassword()) { passwordCheck = false; }
        return passwordCheck;
    }
    invalidLogin(userName, userPass) {
        let adminObj = usersDataArray.find(userData => userData.getPassword());
        let MatchCheck = true;
        if (!this.usernameValidation(userName, adminObj)) { MatchCheck = false; }
        if (!this.userPasswordValidation(userPass, adminObj)) { MatchCheck = false; }
        return MatchCheck;
    }
    checkLoginValidation(userName, userPassword) {
        let validateData = true;
        this.setUserName(userName);
        this.setUserPassword(userPassword)
        if (!this.isNull(this.getUserName(), this.getUserPassword())) {
            errorMsg(this.getUserName(), `${error[0].errorName}: ${error[0].errorMessage}`);
            validateData = false;
        } else {
            successMsg(this.getUserName());
            if (!this.invalidLogin(this.getUserName(), this.getUserPassword())) {
                errorMsg(this.getUserName(), `${error[5].errorName}: ${error[5].errorMessage}`);
                validateData = false;
            } else { successMsg(this.getUserName()); }
        }
        return validateData;
    }
};