import './style.css'
import {generateMenu} from "../menu";
import {generateHome} from "../home";

const tabs = document.querySelectorAll("h2")
tabs.forEach(tab => {
    tab.addEventListener("click", event => {
        const content_area = document.querySelector("#content")
        content_area.innerHTML = ""

        const existingElement = document.querySelector("h2.active-tab")
        if (existingElement) {
            existingElement.classList.remove("active-tab")
        }

        const to_be_active_button = document.getElementById(`${tab.id}`)
        to_be_active_button.classList.add("active-tab")


        if (tab.id=== "menu") {
            generateMenu()
        } else {
            generateHome()
        }
    })
})

generateHome()