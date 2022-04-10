console.log("Holllaaa!")

let root = document.querySelector("#root")

fetch("https://itunes.apple.com/search?term=barenaked+ladies&media=music", {
  method: "GET",
})

.then (function(response) {
    return response.json()
})

.then(function(data){
    for (let i of data.results) { 
        let infodiv = document.createElement("div")
        infodiv.classList.add("info")
        root.appendChild(infodiv)
        infodiv.innerText = i.trackName

let picDiv = document.createElement("img")
root.appendChild(picDiv)
picDiv.src = i.artworkUrl100
picDiv.classList.add("pic")


let playerDiv = document.createElement("div")
root.appendChild(playerDiv)
playerDiv.classList.add("player")
playerDiv.innerHTML =`
        <figure>
    <figcaption>Listen to this track:</figcaption>
    <audio
        controls
        src="${i.previewUrl}">
             Your browser does not support the
             <code>audio</code> element.
     </audio>
 </figure>

         `
        console.log(i.trackName)
        console.log("div created")

        console.log(i.previewUrl)
        
    }


})



// .addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       // code for enter
//     }
// });
