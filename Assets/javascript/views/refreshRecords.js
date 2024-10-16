let refreshRecords = () => {
  usersDataMainContainer.innerHTML = ``;
  usersDataArray.forEach((data, index) => {
    recordRow(
      `${data.getProfilePic()}`,
      `${data.getID()}`,
      `${data.getFirstName()} ${data.getLastName()}`,
      `${data.getUserType()}`);

    modal(
      `${data.getProfilePic()}`,
      `${data.getFirstName()} ${data.getLastName()}`,
      `${data.getEmail()}`,
      `${data.getContactNum()}`,
      `${data.getAddress()}`,
      `${data.getBio()}`,
      `${data.getID()}`);
  });
};