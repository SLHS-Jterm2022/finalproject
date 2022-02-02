fetch("https://api.magicthegathering.io/v1/cards")
.then(res => res.json())
.then(respos => cards = respos)
.then(data => {
console.log("number of cards", data.cards.length)
let filteredArray = data.cards
})