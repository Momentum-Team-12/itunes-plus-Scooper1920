console.log("Holllaaa!")

let container = document.querySelector("#container")

fetch("https://itunes.apple.com/search?term=radiohead&media=music", {
  method: "GET",
})

.then (function(response) {
    return response.json()
})

.then(function(data){
    for (let i of data.results.slice(1)) { 
        let infodiv = document.createElement("div")
        container.appendChild(infodiv)
        infodiv.innerText = i.trackName
        console.log(i.trackName)
        console.log("div created")
        
    }

})
