export function generateHome(){
    const content = document.querySelector("#content")

    const heading = document.createElement("h1")
    heading.textContent = "The Heart of Positano"
    content.appendChild(heading)

    const story = document.createElement("p")
    story.textContent = "In the bustling heart of Naples, Italy, a young boy named Tony dreamt of a life filled with the aroma of fresh basil and the sizzle of wood-fired ovens. From humble beginnings as a dishwasher, Tony's journey through the local kitchens and the breathtaking Amalfi Coast ignited a passion for culinary perfection."+
    "It was in the enchanting town of Positano where Tony found his true inspiration, creating memories that would shape his destiny. With a heart full of dreams, he crossed the ocean to America, determined to bring a slice of Italian heaven to a new world." +
    "In February 1993, Tony's dream blossomed into reality with the opening of Positano Pizza & Ristorante. Here, every dish is crafted with love and tradition, echoing the flavors of his beloved Positano." +
    "Today, Tony's family-operated restaurant stands as a beacon of authentic Italian cuisine, drawing locals from New Hyde Park, Mineola, Williston Park, Garden City, and Manhasset. Each visit to Positano Pizza & Ristorante is not just a meal, but a journey to the heart of Italy, where passion and flavor unite. Come, be a part of our story, and savor the essence of Positano."
    content.appendChild(story)

    const business_hours = document.createElement("div")
    business_hours.id = "business-hours-container"
    const business_hours_heading = document.createElement("h3")
    business_hours_heading.textContent = "Business Hours"
    const business_hours_table = document.createElement("table")

    const schedule = {
        "Monday": "Closed",
        "Tue-Wed": "11:00am - 9:30pm",
        "Thu-Sat": "11:00am - 10:00pm",
        "Sun": "11:00am - 9:30pm"
    }
    Object.entries(schedule).forEach(([day, hours]) => {
        const tr = document.createElement("tr")
        const day_element = document.createElement('td')
        const hours_element = document.createElement('td')
        day_element.textContent = day
        hours_element.textContent = hours
        tr.appendChild(day_element);
        tr.appendChild(hours_element)
        business_hours_table.append(tr)
    })
    business_hours.appendChild(business_hours_heading)
    business_hours.appendChild(business_hours_table)
    content.appendChild(business_hours)
}