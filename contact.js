export function generateContact(){
    const content = document.querySelector("#content")

    // address, phone number, email
    const contact_info = document.createElement("div")
    content.appendChild(contact_info)

    const contact_info_header = document.createElement("h2")
    contact_info_header.textContent = "Contact Methods"
    contact_info.appendChild(contact_info_header)
    contact_info.insertAdjacentHTML("beforeend", "<p class='contact'>406 Hillside Ave</p>" +
        "<p class='contact'>Williston Park, NY 11596</p>" + "<p class='contact'>(516) 877-7839</p>")


    const hours = document.createElement("div")
    content.appendChild(hours)

    const hours_header = document.createElement("h2")
    hours_header.textContent = "Hours"
    hours.appendChild(hours_header)

    const schedule = document.createElement("div")
    hours.appendChild(schedule)
    schedule.classList.add("schedule")

    const schedule_day1 = document.createElement("div")
    const schedule_hours1 = document.createElement("div")
    schedule_day1.textContent = "Monday"
    schedule_hours1.textContent = "Closed"
    schedule.appendChild(schedule_day1)
    schedule.appendChild(schedule_hours1)

    const schedule_day2 = document.createElement("div")
    const schedule_hours2 = document.createElement("div")
    schedule_day2.textContent = "Tue-Wed"
    schedule_hours2.textContent = "11:00am-9:30pm"
    schedule.appendChild(schedule_day2)
    schedule.appendChild(schedule_hours2)

    const schedule_day3 = document.createElement("div")
    const schedule_hours3 = document.createElement("div")
    schedule_day3.textContent = "Thu-Sat"
    schedule_hours3.textContent = "11:00am-10:00pm"
    schedule.appendChild(schedule_day3)
    schedule.appendChild(schedule_hours3)

    const schedule_day4 = document.createElement("div")
    const schedule_hours4 = document.createElement("div")
    schedule_day4.textContent = "Sunday"
    schedule_hours4.textContent = "11:00am-9:30pm"
    schedule.appendChild(schedule_day4)
    schedule.appendChild(schedule_hours4)

}