class User {
  static #id = 0;
  #FirstName;
  #LastName;
  #Email;
  #Contact;
  #Address;
  #Bio;
  #userPicture;
  #UserID;
  #userType;
  #validator;
  create([firstName, lastName, email, contact, address, bio, userPicture]) {
    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.setEmail(email);
    this.setContactNum(contact);
    this.setAddress(address);
    this.setBio(bio);
    this.setProfilePic(userPicture);
    this.setUserType("User");
    this.setID();
    console.log(`This is from create Method: ${this.getID()}`);
  }
  read(clickedBtnId) {
    let modal = usersDataArray.find((user) => user.getID() === clickedBtnId);
    let modalContainer = document.getElementById(clickedBtnId);
    if (modal) {
      return modalContainer;
    } else { console.log(`Modal not found with the ID: ${clickedBtnId}`); }
  }
  update([firstName, lastName, email, contact, address, bio, userPicture]) {
    let userIndex = usersDataArray.findIndex((user) => user.getID() === this.getID());
    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.setEmail(email);
    this.setContactNum(contact);
    this.setAddress(address);
    this.setBio(bio);
    this.setProfilePic(userPicture);
    refreshRecords();
    console.log(`This is from update Method: ${this.getID()}`);
  }
  delete() {
    let userIndex = usersDataArray.findIndex((user) => user.getID() === this.getID());
    if (userIndex !== -1) {
      usersDataArray.splice(userIndex, 1);
      console.log(`User with ID ${this.getID()} has been deleted.`);
      refreshRecords();
    } else { console.log(`User with ID ${this.getID()} not found.`); }
  }
  setElementValidation(attribute, regex, length) {
    this.#validator = new Validation();
    if (!this.#validator.elemValidationCheck(attribute, regex, length)) { return false; } else { return true; };
  }
  setProfilePicValidation(attr) {
    this.#validator = new Validation();
    if (!this.#validator.profilePicValidation(attr)) { return false; } else { return true; }
  }
  createNewUser(newUserData) {
    let newUser = new Validation();
    newUser.createUser(newUserData);
  }
  updateExistingUser(updatedData) {
    let updateUser = new Validation();
    updateUser.updateUser(updatedData);
  }
  createNewAdmin(newAdminData) {
    let newAdmin = new Validation();
    newAdmin.createAdmin(newAdminData);
  }
  updateExistingAdmin(updatedData) {
    let updateAdmin = new Validation();
    updateAdmin.updateAdmin(updatedData);
  }
  setUserType(userType) {
    this.#userType = userType;
  }
  getUserType() {
    return this.#userType;
  }
  setID() {
    User.#id += 1;
    this.#UserID = `prof00${User.#id}`;
  }
  getID() {
    return this.#UserID;
  }

  setFirstName(FName) {
    this.#FirstName = FName;
  }
  getFirstName() {
    return this.#FirstName;
  }
  setLastName(LName) {
    this.#LastName = LName;
  }
  getLastName() {
    return this.#LastName;
  }
  setEmail(email) {
    this.#Email = email;
  }
  getEmail() {
    return this.#Email;
  }
  setContactNum(contact) {
    this.#Contact = contact;
  }
  getContactNum() {
    return this.#Contact;
  }
  setAddress(address) {
    this.#Address = address;
  }
  getAddress() {
    return this.#Address;
  }
  setBio(bio) {
    this.#Bio = bio;
  }
  getBio() {
    return this.#Bio;
  }
  setProfilePic(picture) {
    this.#userPicture = picture;
  }
  getProfilePic() {
    return this.#userPicture;
  }
};