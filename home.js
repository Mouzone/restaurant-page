export function generateHome(){
    const content = document.querySelector("#content")

    const heading = document.createElement("h1")
    heading.textContent = "Our Story"
    content.appendChild(heading)

    const story = document.createElement("p")
    story.textContent = "Positano Pizza & Ristaurante was est. February 1993. It started with a boy who lived in Naples, Italy. Tony started as a dishwasher working his way up in local restaurants and the Amalfi Coast. His greatest memories were when he worked in a town called Positano. Growing a deep passion for food, he came to the U.S. to have the American dream to own his own restaurant. His dream became reality and now Tony owns a family operated business. Local visitors coming from New Hyde Park, Mineola, Williston Park, Garden City & Manhasset to get a taste of Positano’s great food."
    content.appendChild(story)
}