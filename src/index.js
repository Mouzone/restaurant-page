import './style.css'
import {generateHome} from "../home";
import {generateMenu} from "../menu";
import {generateAbout} from "../about";
import {generateContact} from "../contact";

const nav = document.querySelector("nav")
const buttons = nav.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", event => {
        const content = document.querySelector("#content")
        content.innerHTML = ""
        if ("home" in button.classList) {
            generateHome()
        } else if ("menu" in button.classList) {
            generateMenu()
        } else if ("about" in button.classList) {
            generateAbout()
        } else {
            generateContact()
        }
    })
})