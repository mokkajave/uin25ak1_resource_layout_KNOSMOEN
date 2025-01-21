document.getElementById("html-btn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = 
            `<h2>${resources[0].category}</h2>
            <p>${resources[0].text}</p>
            <ul id="links">
                <li><a>${resources[0].sources[0].title}</a></li>
                <li><a>${resources[0].sources[1].title}</a></li>
                <li><a>${resources[0].sources[2].title}</a></li>
            </ul>`
})

document.getElementById("css-btn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = 
            `<h2>${resources[1].category}</h2>
            <p>${resources[1].text}</p>
            <ul id="links">
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
            </ul>`
})