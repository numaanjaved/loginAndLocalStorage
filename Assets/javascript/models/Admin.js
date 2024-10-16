class Admin extends User {
    #adminName;
    #password;
    #validator;
    setAdminName(adminName) {
        this.#adminName = adminName;
    }
    getAdminName() {
        return this.#adminName;
    }
    setPassword(pass) {
        this.#password = pass;
    }
    getPassword() {
        return this.#password;
    }
    constructor() {
        super();
    }
    create([firstName, lastName, email, contact, address, bio, userPicture, adminUserName, adminPass]) {
        super.create([firstName, lastName, email, contact, address, bio, userPicture]);
        this.setAdminName(adminUserName);
        this.setPassword(adminPass);
        this.setUserType("Admin");
        console.log(`Admin Account is created....\n
        Admin Name: ${this.getAdminName()}\n
        Password: ${this.getPassword()}`);
    }
    update([firstName, lastName, email, contact, address, bio, userPicture, adminUserName, adminPass]) {
        super.update([firstName, lastName, email, contact, address, bio, userPicture]);
        this.setAdminName(adminUserName);
        this.setPassword(adminPass);
        console.log(`Admin Account is Updated....\n
        Admin Name: ${this.getAdminName()}\n
        Password: ${this.getPassword()}`);
    }
    CheckValidation(userName, userPass) {
        this.#validator = new LoginValidation();
        if (!this.#validator.checkLoginValidation(userName, userPass)) {
            return false;
        } else { return true; }
    }
};