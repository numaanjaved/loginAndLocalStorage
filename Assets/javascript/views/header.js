let headerTag = createNewElement(["header", "header", "body"]);
let navbar = createNewElement(["nav", "navbar", headerTag]);
let logoContainer = createNewElement(["div", "logo_container", navbar]);
createNewElement(["img", null, logoContainer, null, { src: "./Assets/images/sticky-note.png" }]);
createNewElement(["h4", "logo_name", logoContainer, `Profiles`]);