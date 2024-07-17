import './style.css'
import {generateHome} from "../home";
import {generateMenu} from "../menu";
import {generateAbout} from "../about";
import {generateContact} from "../contact";

const nav = document.querySelector("nav")
const buttons = nav.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(button)
        const content_area = document.querySelector("#content")
        content_area.innerHTML = ""

        const existingElement = document.querySelector("button.active-tab")
        if (existingElement) {
            existingElement.classList.remove("active-tab")
        }

        if (button.id === "home") {
            generateHome()
        } else if (button.id=== "menu") {
            generateMenu()
        } else if (button.id === "about") {
            generateAbout()
        } else {
            generateContact()
        }
    })
})

generateHome()