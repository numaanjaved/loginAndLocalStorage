class User {
  static id = 0;
  FirstName;
  LastName;
  Email;
  Contact;
  Address;
  Bio;
  userPicture;
  UserID;
  userType;
  validator;
  constructor() {
    let storedData = localStorage.getItem('DataArray');
    if (storedData) {
      usersDataArray = JSON.parse(storedData);
      if (usersDataArray.length > 0) {
        let highestID = usersDataArray.map(user => parseInt(user.UserID.slice(6))).reduce((curr, max) => curr > max ? curr : max, 0);
        User.id = highestID;
      }
    }
  }
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
    let storedData = JSON.parse(localStorage.getItem('DataArray'));
    let modal = storedData.find((user) => user.UserID === clickedBtnId);
    if (modal) {
      return modal;
    }
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
  delete(clickedBtnId) {

    let storedData = JSON.parse(localStorage.getItem('DataArray'));
    let profileIndex = storedData.findIndex((user) => user.UserID === clickedBtnId);
    if (profileIndex !== -1) {
      storedData.splice(profileIndex, 1);
      localStorage.setItem('DataArray', JSON.stringify(storedData));
      refreshRecords();
    }
  }
  setElementValidation(attribute, regex, length) {
    this.validator = new Validation();
    if (!this.validator.elemValidationCheck(attribute, regex, length)) { return false; } else { return true; };
  }
  setProfilePicValidation(attr) {
    this.validator = new Validation();
    if (!this.validator.profilePicValidation(attr)) { return false; } else { return true; }
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
    this.userType = userType;
  }
  getUserType() {
    return this.userType;
  }
  setID() {
    User.id += 1;
    this.UserID = `prof00${User.id}`;
  }
  getID() {
    return this.UserID;
  }

  setFirstName(FName) {
    this.FirstName = FName;
  }
  getFirstName() {
    return this.FirstName;
  }
  setLastName(LName) {
    this.LastName = LName;
  }
  getLastName() {
    return this.LastName;
  }
  setEmail(email) {
    this.Email = email;
  }
  getEmail() {
    return this.Email;
  }
  setContactNum(contact) {
    this.Contact = contact;
  }
  getContactNum() {
    return this.Contact;
  }
  setAddress(address) {
    this.Address = address;
  }
  getAddress() {
    return this.Address;
  }
  setBio(bio) {
    this.Bio = bio;
  }
  getBio() {
    return this.Bio;
  }
  setProfilePic(picture) {
    this.userPicture = picture;
  }
  getProfilePic() {
    return this.userPicture;
  }
};