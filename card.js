let planetData;
let cards;

fetch("https://api.magicthegathering.io/v1/cards")
    .then(res => res.json())