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
   <p>${ele.name}</p>`
   mainEL.appendChild(tempEL)
}
})

function getCards() {
    currentPage ++;
    console.log("In Function Get Card:", currentPage)
    fetch(`https://api.magicthegathering.io/v1/cards?page=${currentPage}`)
    .then(res => res.json())
    .then(respos => cards = respos)
    .then(data => {
    console.log("number of cards", data.cards.length)
    let mainElement = document.getElementById('main');
    mainElement.innerHTML = ""
    let filteredArray = data.cards
    // let filteredArray = data.cards.filter(ele => ele.imageUrl)
    for(const ele of filteredArray) {
       let mainEL = document.getElementById('main')
       let tempEL = document.createElement('div')
       tempEL.classList.add('cardBlock')
       tempEL.innerHTML = `<img class = "cardIMG" src=${ele.imageUrl}>
       <p>${ele.name}</p>`
       mainEL.appendChild(tempEL)
    }
    })
}

document.getElementById('loadMore').addEventListener('click', getCards)

//made an alteration