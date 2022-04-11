console.log("Holllaaa!")

let root = document.querySelector("#root")
let submit = document.querySelector("#submit")
let input = document.getElementById("search-input")
let song = document.getElementById('search-input')




// fetch("https://itunes.apple.com/search?term=talking+heads&media=music", {
//   method: "GET",
// })

// .then(function(response) {
//     return response.json()
// })

// .then(function(data){
//     for (let i of data.results.slice(2)) { 

//         let bandCard = document.createElement("div")
//         root.appendChild(bandCard)
//         bandCard.id = "bandCard"
        
//         let info = document.createElement("p")
//         info.classList.add("info")
//         bandCard.appendChild(info)
//         info.innerText = i.trackName



// let picDiv = document.createElement("img")
// bandCard.appendChild(picDiv)
// picDiv.src = i.artworkUrl100
// picDiv.classList.add("pic")


// let playerDiv = document.createElement("div")
// bandCard.appendChild(playerDiv)
// playerDiv.classList.add("player")
// playerDiv.innerHTML =`
//         <figure>
//     <figcaption>Listen to ${i.trackName}:</figcaption>
//     <audio
//         controls
//         src="${i.previewUrl}">
//              Your browser does not support the
//              <code>audio</code> element.
//      </audio>
//  </figure>

//          `
//         console.log(i.trackName)
//         console.log("div created")

//         console.log(i.previewUrl)
        
//     }


// })


submit.addEventListener("click", (e) => {
    e.preventDefault();
    let value = song.value

    // if (value && value.trim().length > 0){
    //      value = value.trim().toLowerCase()
    // }
    console.log(value)
fetch(`https://itunes.apple.com/search?term=${value}&media=music`, {
  method: "GET",
})

.then(function(response) {
    return response.json()
})
.then(data => {
    console.log(data)
})
})
// .then(function(data){
//     for (let i of data.results) { 

//         let bandCard = document.createElement("div")
//         root.appendChild(bandCard)
//         bandCard.id = "bandCard"
        
//         let info = document.createElement("p")
//         info.classList.add("info")
//         bandCard.appendChild(info)
//         info.innerText = i.trackName



// let picDiv = document.createElement("img")
// bandCard.appendChild(picDiv)
// picDiv.src = i.artworkUrl100
// picDiv.classList.add("pic")


// let playerDiv = document.createElement("div")
// bandCard.appendChild(playerDiv)
// playerDiv.classList.add("player")
// playerDiv.innerHTML =`
//         <figure>
//     <figcaption>Listen to ${i.trackName}:</figcaption>
//     <audio
//         controls
//         src="${i.previewUrl}">
//              Your browser does not support the
//              <code>audio</code> element.
//      </audio>
//  </figure>

//          `
//         console.log(i.trackName)
//         console.log("div created")

//         console.log(i.previewUrl)
        
//     }


// })




  
  






