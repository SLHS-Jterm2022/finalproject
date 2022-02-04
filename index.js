let cards;
let currentPage = 1;
fetch("https://api.magicthegathering.io/v1/cards")
.then(res => res.json())
.then(respos => cards = respos)
.then(data => {
console.log("number of cards", data.cards.length)
let filteredArray = data.cards.filter(ele => ele.imageUrl)
for(const ele of filteredArray) {
   let mainEL = document.getElementById('main')
   let tempEL = document.createElement('div')
   tempEL.classList.add('cardBlock')
   tempEL.innerHTML = `<img class = "cardIMG" src=${ele.imageUrl}>
   <p>${ele.name}</p>`;
   tempEL.setAttribute("name", `${ele.multiverseid}`);
   tempEL.addEventListener("click", cardClicked)
   mainEL.appendChild(tempEL)
}
})

function cardClicked(event) {
    console.log("Event", event.target)



}


function getCards() {
    currentPage ++;
    console.log("In Function Get Card:", currentPage)
    fetch(`https://api.magicthegathering.io/v1/cards?page=${currentPage}`)
    .then(res => res.json())
    .then(respos => cards = respos)
    .then(data => {
       console.log("SubTest", data.cards[0])
   //  console.log("number of cards", data.cards.length)
    let mainElement = document.getElementById('main');
    mainElement.innerHTML = ""
    let filteredArray = data.cards
    // let filteredArray = data.cards.filter(ele => ele.imageUrl)
    for(const ele of filteredArray) {
       console.log("ElementInForLoop", ele.colorIdentity)
       let mainEL = document.getElementById('main')
       let tempEL = document.createElement('div')
       tempEL.classList.add('cardBlock')
       tempEL.setAttribute("name", `${ele.multiverseid}`);
       tempEL.innerHTML = `<img class = "cardIMG" src=${ele.imageUrl}>
       <p>${ele.name}</p>`
       tempEL.addEventListener("click", cardClicked)
       mainEL.appendChild(tempEL)
    }
    })
}

document.getElementById('loadMore').addEventListener('click', getCards)


let firstValue = document.getElementById("menu1").value 
console.log("First Value", firstValue)


//made an alteration