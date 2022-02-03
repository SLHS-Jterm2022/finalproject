fetch("https://api.magicthegathering.io/v1/cards")
.then(res => res.json())
.then(respos => cards = respos)
.then(data => {
console.log("number of cards", data.cards)
let filteredArray = data.cards
})

//made an alteration