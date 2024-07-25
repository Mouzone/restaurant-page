export function generateMenu(){
    const content = document.querySelector("#content")

    const heading = document.createElement("h1")
    heading.textContent = "Menus"
    content.appendChild(heading)

    const menus = {
        "Dine In": "https://irp.cdn-website.com/6904e732/files/uploaded/19610%20positano_afnwY1ivQsuuoGoEK6fu.pdf",
        "Catering": "https://irp.cdn-website.com/6904e732/files/uploaded/19610%20positano_afnwY1ivQsuuoGoEK6fu.pdf",
        "Take Out": "https://irp.cdn-website.com/6904e732/files/uploaded/25274%20Positano%20%281%29_52gvyJFqSiSb3vLeXR8P.pdf",
        "Lunch To Go": "https://irp.cdn-website.com/6904e732/files/uploaded/14010%20Positano%20lunch%20special%20%281%29.pdf",
        "Lunch To Stay": "https://irp.cdn-website.com/6904e732/files/uploaded/27240%20Positano%20Lunch%20%282%29.pdf"
    }
    const menus_container_element = document.createElement("div")
    content.appendChild(menus_container_element)
    menus_container_element.id = "menus_container"
    Object.keys(menus).forEach(menu => {
        const menu_element = document.createElement("div")
        menu_element.classList.add("menu")
        menu_element.textContent = menu
        menus_container_element.appendChild(menu_element)
    })
}