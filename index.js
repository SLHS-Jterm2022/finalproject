let cards;
let currentPage = 1;
fetch("https://api.magicthegathering.io/v1/cards")
.then(res => res.json())
.then(respos => cards = respos.cards)
.then(data => {

console.log("number of cards", data)
let filteredArray = data.filter(ele => ele.imageUrl)

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
    console.log("Event", event.target.getAttribute('name'))
    localStorage.setItem("cardNumber", event.target.getAttribute('name'))
    


}


function getCards() {
    currentPage ++;
    console.log("In Function Get Card:", currentPage)
    fetch(`https://api.magicthegathering.io/v1/cards?page=${currentPage}`)
    .then(res => res.json())
    .then(respos => cards = respos.cards)
    .then(data => {
    //    console.log("SubTest", data.cards[0])
   //  console.log("number of cards", data.cards.length)
    let mainElement = document.getElementById('main');
    mainElement.innerHTML = ""
    let filteredArray = data
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

const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const menu4 = document.getElementById("menu4");
const menu5 = document.getElementById("menu5");
const menu6 = document.getElementById("menu6");
const menu7 = document.getElementById("menu7");

menu1.addEventListener("change", function(event) {
    console.log("Event: Menu 1 change", event.target.value)
    let value = event.target.value;
    
    if(value === "0") {
        menu2.setAttribute("class", "show")
        menu3.setAttribute("class", "hide")
        menu4.setAttribute("class", "hide")
        menu5.setAttribute("class", "hide")
        menu6.setAttribute("class", "hide")
        menu7.setAttribute("class", "hide")
        
        menu2.addEventListener("change", function(event) {
            console.log("If statement", event.target.value)
            console.log('type of cards' , cards);
            let noColorsArray = cards.filter(card => card.colors);
            let noColorsArrayNew = noColorsArray.filter(card => card.colors[0] === event.target.value)
           
            console.log("Filtered Array", noColorsArrayNew)
        })
    }

    if(value === "1") {
        menu2.setAttribute("class", "hide")
        menu3.setAttribute("class", "show")
        menu4.setAttribute("class", "hide")
        menu5.setAttribute("class", "hide")
        menu6.setAttribute("class", "hide")
        menu7.setAttribute("class", "hide")
    }

    if(value === "2") {
        menu2.setAttribute("class", "hide")
        menu3.setAttribute("class", "hide")
        menu4.setAttribute("class", "show")
        menu5.setAttribute("class", "hide")
        menu6.setAttribute("class", "hide")
        menu7.setAttribute("class", "hide")
    }

    if(value === "3") {
        menu2.setAttribute("class", "hide")
        menu3.setAttribute("class", "hide")
        menu4.setAttribute("class", "hide")
        menu5.setAttribute("class", "show")
        menu6.setAttribute("class", "hide")
        menu7.setAttribute("class", "hide")
    }

    if(value === "4") {
        menu2.setAttribute("class", "hide")
        menu3.setAttribute("class", "hide")
        menu4.setAttribute("class", "hide")
        menu5.setAttribute("class", "hide")
        menu6.setAttribute("class", "show")
        menu7.setAttribute("class", "hide")
    }

    if(value === "5") {
        menu2.setAttribute("class", "hide")
        menu3.setAttribute("class", "hide")
        menu4.setAttribute("class", "hide")
        menu5.setAttribute("class", "hide")
        menu6.setAttribute("class", "hide")
        menu7.setAttribute("class", "show")
    }
})