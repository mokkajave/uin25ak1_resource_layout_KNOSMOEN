//Navigation bar
let navbarHTML = ""

resources.map((resource) => navbarHTML += `<li><button class="btn" onclick="updateContent('${resource.category}')">${resource.category}</button></li>`)

document.getElementById("nav-bar").innerHTML = navbarHTML

//Frontpage when loaded, by default
updateContent("HTML")

//FUNCTIONS
function updateContent(categoryName) {
    //Filters the resource by specified category name
    const filteredCategory = resources.filter((resource) => resource.category === categoryName)[0]

    //Empties the variable for each click, so that it does'nt multiply
    let resourcesHTML = ""

    //Updates "content" with information of a specified index
    document.getElementById("content").innerHTML = 
            `<h2>${filteredCategory.category}</h2>
            <p>${filteredCategory.text}</p>
            <ul id="links">
                ${filteredCategory.sources.map((source) => resourcesHTML += `<li><a href="${source.url}">${source.title}</a></li>`)}
            </ul>`

    document.getElementById("links").innerHTML = resourcesHTML

    //Creating an iterable Collection of elements
    const buttons = document.getElementsByClassName("btn")

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i]

        if (button.innerHTML === categoryName) {
            button.classList.add("white")
        }
        else {
            button.classList.remove("white")
        }
    }
}