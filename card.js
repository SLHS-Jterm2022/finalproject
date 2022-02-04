let planetData;
let cards;

fetch("https://api.magicthegathering.io/v1/cards/457213")
    .then(res => res.json())
    .then(respos => cards = respos)
    .then(data => {
        console.log("number of cards", data)
    
            let card = data.card;
            let mainEL = document.getElementById("Main");
            let tempElement = document.createElement("div");
            tempElement.classList.add("card")
            tempElement.innerHTML = `<h1>${card.name}</h1><img src=${card.imageUrl} /><p>${card.originalText}</p>
            <p>Flavor: ${card.flavor}</p>
            <p>Type: ${card.type}</p>
            <p>Cost: ${card.manaCost}</p>
            <p>Cmc: ${card.cmc}</p>
            <p>Artist: ${card.artist}</p>
            <p>Set: ${card.set}</p>
            <p>Rarity: ${card.rarity}</p>`
            mainEL.appendChild(tempElement);
    })