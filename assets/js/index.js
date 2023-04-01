import { typedName } from "./typedName.js"
import { headerMobileMenu } from "./headerMobileMenu.js"
import { validateInput } from "./form.js"
import { cardAge } from "./cardAge.js"
import { projectComingSoon } from "./projectComingSoon.js"
import { footerYear } from "./footerYear.js"

window.addEventListener("load", () => { typedName(); cardAge(); projectComingSoon(); footerYear();});

const buttonToggle = document.querySelector("[data-menu-toggle]");
buttonToggle.addEventListener("click", (event) => { headerMobileMenu(event); })

const inputFields = document.querySelectorAll("[data-input]");
inputFields.forEach(input => { input.addEventListener("blur", (event) => { validateInput(event.target); }) })