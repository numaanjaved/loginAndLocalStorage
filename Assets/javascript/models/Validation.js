class Validation {
    #attribute;
    #regex;
    #len;
    setAttribute(attr) { this.#attribute = attr; };
    getAttribute() { return this.#attribute; };
    setRegex(reg) { this.#regex = reg; };
    getRegex() { return this.#regex; };
    setLength(length) { this.#len = length; };
    getLength() { return this.#len; };
    isNull(attribute) {
        let check = true;
        if (attribute.value == "" || attribute == null) {
            check = false;
        }
        return check;
    };
    matchRegex(attribute, regexSyn) {
        let check = true
        if (!attribute.value.match(regexSyn)) {
            check = false;
        }
        return check;
    };
    checkLength(attribute, maxLen) {
        let check = true;
        if (attribute.value.length > maxLen) {
            check = false;
        }
        return check;
    };
    elemValidationCheck(attribute, regex, len) {
        this.setAttribute(attribute);
        this.setRegex(regex);
        this.setLength(len);
        if (!this.isNull(this.getAttribute())) {
            errorMsg(this.getAttribute(), `${error[0].errorName}: ${error[0].errorMessage}`);
            return false;
        } else { successMsg(this.getAttribute()); }
        if (!this.matchRegex(this.getAttribute(), this.getRegex())) {
            errorMsg(this.getAttribute(), `${error[1].errorName}: ${error[1].errorMessage}`);
            return false;
        } else { successMsg(this.getAttribute()); }
        if (!this.checkLength(this.getAttribute(), this.getLength())) {
            errorMsg(this.getAttribute(), `${error[2].errorName}: ${error[2].errorMessage}`);
            return false;
        } else { successMsg(this.getAttribute()); }
        return true;
    };
    profilePicValidation(attribute) {
        this.setAttribute(attribute);
        this.getAttribute();
        let imgCheck = true;
        if (!this.getAttribute().files.length || imgDisplay.src.includes("default_profile.png")) {
            imgCheck = false;
            errorMsg(attribute, `${error[3].errorName}: ${error[3].errorMessage}`);
        } else {
            successMsg(attribute);
            imgCheck = true;
        }
        return imgCheck;
    };
    createUser(userDataArr) {
        successMsg(selectUserType);
        let userDataObj = new User();
        userDataObj.create(userDataArr);
        if (userIndexCheck === null) {
            usersDataArray.push(userDataObj);
        }
    };
    updateUser(userDataArr) {
        if (userIndexCheck !== null) {
            usersDataArray[userIndexCheck].update(userDataArr);
            userIndexCheck = null;
        }
    };
    createAdmin(userDataArr) {
        if (!this.adminExists()) {
            errorMsg(selectUserType, `${error[4].errorName}: ${error[4].errorMessage}`);
        } else {
            let userDataObj = new Admin();
            userDataObj.create(userDataArr);
            if (userIndexCheck === null) {
                usersDataArray.push(userDataObj);
            }
            successMsg(selectUserType);
        }
    };
    updateAdmin(userDataArr) {
        if (userIndexCheck !== null) {
            usersDataArray[userIndexCheck].update(userDataArr);
            userIndexCheck = null;
        }
    };
    adminExists() {
        let adminAccount = usersDataArray.find(usersData => usersData.getUserType() == "Admin");
        return adminAccount ? false : true;
    }
};