console.log("Holllaaa!")

let root = document.querySelector("#root")
let submit = document.querySelector("#submit")
let input = document.getElementById("search-input")
let form = document.querySelector("#sign")
let bandTitle = document.querySelector("#bandTitle")



function listenerStuff() {
form.addEventListener("submit", function(event) {
event.preventDefault()
console.log(`This is a form submit event: ${event}`)
// let messageDiv =document.createElement("div")
let band = document.querySelector("#user-input")
console.log(`You found ${band.value}! You have beauty and grace!`)
let titleBox = document.createElement("div")
titleBox.classList.add("title")
bandTitle.appendChild(titleBox)
console.log(titleBox)
titleBox.innerText=`${band.value}'s Discography`
// important to return at the end of function to store value and
// use it later
GetReq (band.value)


})
}


function GetReq(input){

fetch(`https://itunes.apple.com/search?term=${input}&media=music`, {
  method: "GET",
})


.then(function(response) {
    return response.json()
})

.then(function(data){
    for (let i of data.results) { 

        let bandCard = document.createElement("div")
        root.appendChild(bandCard)
        bandCard.id = "bandCard"
        
        let info = document.createElement("p")
        info.classList.add("info")
        bandCard.appendChild(info)
        info.innerText = i.trackName



let picDiv = document.createElement("img")
bandCard.appendChild(picDiv)
picDiv.src = i.artworkUrl100
picDiv.classList.add("pic")


let playerDiv = document.createElement("div")
bandCard.appendChild(playerDiv)
playerDiv.classList.add("player")
playerDiv.innerHTML =`
        <figure>
    <figcaption>Listen to ${i.trackName}:</figcaption>
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
}

let selection = listenerStuff()





// searchInput.addEventListener("click", (e) => {
//     let value = e.target.value

//     if (value && value.trim().length > 0){
//          value = value.trim().toLowerCase()

//          fetch(`https://itunes.apple.com/search?term=${value}&media=music`, {
//   method: "GET",
// })

// .then(function(response) {
//     return response.json()
// })

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




  
  






