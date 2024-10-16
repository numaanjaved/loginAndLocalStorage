let createNewElement = ([elemName, elemClass = null, elemParent, elemContent = null, attributes = {}]) => {
  let newElement = document.createElement(`${elemName}`);
  if (Array.isArray(elemClass)) {
    elemClass.forEach((className) => {
      newElement.classList.add(className);
    });
  } else if (typeof elemClass === "string") {
    newElement.classList.add(elemClass);
  }
  if (elemContent != null) {
    newElement.innerHTML = elemContent;
  }
  if (attributes && typeof attributes === "object") {
    for (const attrKey in attributes) {
      newElement.setAttribute(attrKey, attributes[attrKey]);
    }
  }
  if (typeof elemParent === "string") {
    let selectedParent = document.querySelector(elemParent);
    if (selectedParent) {
      selectedParent.appendChild(newElement);
    } else {
      console.log(
        `Error: Parent element with selector "${elemParent}" not found.`
      );
    }
  } else if (elemParent instanceof HTMLElement) {
    elemParent.appendChild(newElement);
  } else {
    console.log("Error: Invalid parent element.");
  }
  return newElement;
};