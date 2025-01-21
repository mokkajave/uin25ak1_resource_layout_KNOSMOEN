//Button-variables
const htmlBtn = document.getElementById("html-btn")
const cssBtn = document.getElementById("css-btn")
const jsBtn = document.getElementById("js-btn")
const reactBtn = document.getElementById("react-btn")
const sanityBtn = document.getElementById("sanity-btn")

//HTML
htmlBtn.addEventListener("click", function() {
    updateContent(0)
    updateClassList(this)
})

//CSS
cssBtn.addEventListener("click", function() {
    updateContent(1)
    updateClassList(this)
})

//JavaScript
jsBtn.addEventListener("click", function() {
    updateContent(2)
    updateClassList(this)
})

//React
reactBtn.addEventListener("click", function() {
    updateContent(3)
    updateClassList(this)
})

//Sanity
sanityBtn.addEventListener("click", function() {
    updateContent(4)
    updateClassList(this)
})

//Frontpage when loaded
updateContent(0)

//FUNCTIONS
function updateContent(index) {
    //Empties the variable for each click, so that it does'nt multiply
    let sourcesHTML = ""

    //Updates "content" with information of a specified index
    document.getElementById("content").innerHTML = 
            `<h2>${resources[index].category}</h2>
            <p>${resources[index].text}</p>
            <ul id="links"></ul>`

    //Maps through sources of a specified index and updates element "links"
    resources[index].sources.map((source) => sourcesHTML += `<li><a href="${source.url}">${source.title}</a></li>`)
    document.getElementById("links").innerHTML = sourcesHTML
}

function updateClassList(button) {
    //Removes class "white" from all buttons
    htmlBtn.classList.remove("white")
    cssBtn.classList.remove("white")
    jsBtn.classList.remove("white")
    reactBtn.classList.remove("white")
    sanityBtn.classList.remove("white")

    //Adds class "white" to a specified button
    button.classList.add("white")
}