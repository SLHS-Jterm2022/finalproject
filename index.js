let cards;
let currentPage = 1;

const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const menu4 = document.getElementById("menu4");
const menu5 = document.getElementById("menu5");
const menu6 = document.getElementById("menu6");
const menu7 = document.getElementById("menu7");

fetch("https://api.magicthegathering.io/v1/cards")
.then(res => res.json())
.then(respos => cards = respos.cards)
.then(data => {

console.log("number of cards", data)
let filteredArray1 = data.filter(ele => ele.imageUrl);
let filteredArray = filteredArray1.filter(ele => ele.multiverseid)

for(const ele of filteredArray) {
   let mainEL = document.getElementById('main')
   let tempEL = document.createElement('div')
   tempEL.classList.add('cardBlock')
   tempEL.innerHTML = `<img class = "cardIMG noProp" src=${ele.imageUrl} name = ${ele.multiverseid}>
   <p class = "noProp" name = ${ele.multiverseid}>${ele.name}</p>`;
   tempEL.setAttribute("name", `${ele.multiverseid}`);
   tempEL.addEventListener("click", cardClicked)
   mainEL.appendChild(tempEL)
}

})

function cardClicked(event) {
    console.log("Event", event.target.getAttribute('name'))
    console.log("ActualEvent", event.target)
    localStorage.setItem("cardNumber", event.target.getAttribute('name'))
    window.location = "card.html"


}




function getCards() {
    menu2.setAttribute("class", "hide")
    menu3.setAttribute("class", "hide")
    menu4.setAttribute("class", "hide")
    menu5.setAttribute("class", "hide")
    menu6.setAttribute("class", "hide")
    menu7.setAttribute("class", "hide")
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
       tempEL.innerHTML = `<img class = "cardIMG" src=${ele.imageUrl} name = ${ele.multiverseid}>
       <p name = ${ele.multiverseid}>${ele.name}</p>`
       tempEL.addEventListener("click", cardClicked)
       mainEL.appendChild(tempEL)
    }
    })
}

document.getElementById('loadMore').addEventListener('click', getCards)


let firstValue = document.getElementById("menu1").value 
console.log("First Value", firstValue)


//made an alteration


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
            let noColorsArray = cards.filter(card => card.colors && card.imageUrl && card.multiverseid);
            let noColorsArrayNew = noColorsArray.filter(card => card.colors[0] === event.target.value)
           
            console.log("Filtered Array", noColorsArrayNew)

            let mainEL = document.getElementById('main')
            mainEL.innerHTML = ""
            if(noColorsArrayNew.length === 0) {
               let tempEL = document.createElement("div") 
               tempEL.setAttribute("class", "errorMessage")
               tempEL.innerText = "Nothing matches your search. Try Load More."
               mainEL.appendChild(tempEL)
            } else {
                
                for(const ele of noColorsArrayNew) {
                    let tempEL = document.createElement('div')
                    tempEL.classList.add('cardBlock')
                    let tempImage = ""
                    if(ele.imageUrl) {
                      tempImage = ele.imageUrl
                    } else {
                        tempImage = "https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?pid=ImgDet&rs=1"
                    }
                    tempEL.setAttribute("name", `${ele.multiverseid}`);
                    tempEL.innerHTML = `<img class = "cardIMG" src=${tempImage} name = ${ele.multiverseid}>
                    <p name = ${ele.multiverseid}>${ele.name}</p>`
                    tempEL.addEventListener("click", cardClicked)
                    mainEL.appendChild(tempEL)
                 }
            } 
            
        })
    }

    if(value === "1") {
        menu2.setAttribute("class", "hide")
        menu3.setAttribute("class", "show")
        menu4.setAttribute("class", "hide")
        menu5.setAttribute("class", "hide")
        menu6.setAttribute("class", "hide")
        menu7.setAttribute("class", "hide")

        menu3.addEventListener("change", function(event){
            console.log("If statement", event.target.value)
            console.log('type of cards' , cards);
            let noTypesArray = cards.filter(card => card.types && card.imageUrl && card.multiverseid);
            let noTypesArrayNew = noTypesArray.filter(card => card.types[0] === event.target.value)
           
            console.log("Filtered Array", noTypesArrayNew)

            let mainEL = document.getElementById('main')
            mainEL.innerHTML = ""
            if(noTypesArrayNew.length === 0) {
                let tempEL = document.createElement("div") 
                tempEL.setAttribute("class", "errorMessage")
                tempEL.innerText = "Nothing matches your search. Try Load More."
                mainEL.appendChild(tempEL)
            } else {
                
                for(const ele of noTypesArrayNew) {
                    let tempEL = document.createElement('div')
                    tempEL.classList.add('cardBlock')
                    let tempImage = ""
                    if(ele.imageUrl) {
                      tempImage = ele.imageUrl
                    } else {
                        tempImage = "https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?pid=ImgDet&rs=1"
                    }
                    tempEL.setAttribute("name", `${ele.multiverseid}`);
                    tempEL.innerHTML = `<img class = "cardIMG" src=${tempImage} name = ${ele.multiverseid}>
                    <p name = ${ele.multiverseid}>${ele.name}</p>`
                    tempEL.addEventListener("click", cardClicked)
                    mainEL.appendChild(tempEL)
                 }
             }
        })
    }

    if(value === "2") {
        menu2.setAttribute("class", "hide")
        menu3.setAttribute("class", "hide")
        menu4.setAttribute("class", "show")
        menu5.setAttribute("class", "hide")
        menu6.setAttribute("class", "hide")
        menu7.setAttribute("class", "hide")

        menu4.addEventListener("change", function(event) {
            console.log("If statement", typeof(event.target.value))
            console.log('type of cards' , cards);
            let noCmcArray = cards.filter(card => card.cmc && card.imageUrl && card.multiverseid);
            let noCmcArrayNew = noCmcArray.filter(card => card.cmc === Number(event.target.value))
           
            console.log("Filtered Array", noCmcArrayNew)

            let mainEL = document.getElementById('main')
            mainEL.innerHTML = ""
            if(noCmcArrayNew.length === 0) {
                let tempEL = document.createElement("div") 
                tempEL.setAttribute("class", "errorMessage")
                tempEL.innerText = "Nothing matches your search. Try Load More."
                mainEL.appendChild(tempEL)
             } else {
                 
                 for(const ele of noCmcArrayNew) {
                     let tempEL = document.createElement('div')
                     tempEL.classList.add('cardBlock')
                     let tempImage = ""
                     if(ele.imageUrl) {
                       tempImage = ele.imageUrl
                     } else {
                         tempImage = "https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?pid=ImgDet&rs=1"
                     }
                     tempEL.setAttribute("name", `${ele.multiverseid}`);
                     tempEL.innerHTML = `<img class = "cardIMG" src=${tempImage} name = ${ele.multiverseid}>
                     <p name = ${ele.multiverseid}>${ele.name}</p>`
                     tempEL.addEventListener("click", cardClicked)
                     mainEL.appendChild(tempEL)
                  }
             }
        })
    }

    if(value === "3") {
        menu2.setAttribute("class", "hide")
        menu3.setAttribute("class", "hide")
        menu4.setAttribute("class", "hide")
        menu5.setAttribute("class", "show")
        menu6.setAttribute("class", "hide")
        menu7.setAttribute("class", "hide")

        menu5.addEventListener("keyup", function(event) {
            console.log("If statement", typeof(event.target.value))
            console.log('type of cards' , cards);
            let noCmcArray = cards.filter(card => card.setName && card.imageUrl && card.multiverseid);
            let noCmcArrayNew = noCmcArray.filter(card => card.setName.includes(event.target.value))
           
            console.log("Filtered Array", noCmcArrayNew)

            let mainEL = document.getElementById('main')
            mainEL.innerHTML = ""
            if(noCmcArrayNew.length === 0) {
                let tempEL = document.createElement("div") 
                tempEL.setAttribute("class", "errorMessage")
                tempEL.innerText = "Nothing matches your search. Try Load More."
                mainEL.appendChild(tempEL)
             } else {
                 
                 for(const ele of noCmcArrayNew) {
                     let tempEL = document.createElement('div')
                     tempEL.classList.add('cardBlock')
                     let tempImage = ""
                     if(ele.imageUrl) {
                       tempImage = ele.imageUrl
                     } else {
                         tempImage = "https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?pid=ImgDet&rs=1"
                     }
                     tempEL.setAttribute("name", `${ele.multiverseid}`);
                     tempEL.innerHTML = `<img class = "cardIMG" src=${tempImage} name = ${ele.multiverseid}>
                     <p name = ${ele.multiverseid}>${ele.name}</p>`
                     tempEL.addEventListener("click", cardClicked)
                     mainEL.appendChild(tempEL)
                  }
             }
        })
    }

    if(value === "4") {
        menu2.setAttribute("class", "hide")
        menu3.setAttribute("class", "hide")
        menu4.setAttribute("class", "hide")
        menu5.setAttribute("class", "hide")
        menu6.setAttribute("class", "show")
        menu7.setAttribute("class", "hide")

        menu6.addEventListener("change", function(event) {
            console.log("If statement", event.target.value)
            console.log('type of cards' , cards);
            let noTypesArray = cards.filter(card => card.rarity && card.imageUrl && card.multiverseid);
            let noTypesArrayNew = noTypesArray.filter(card => card.rarity === event.target.value)
           
            console.log("Filtered Array", noTypesArrayNew)

            let mainEL = document.getElementById('main')
            mainEL.innerHTML = ""
            if(noTypesArrayNew.length === 0) {
                let tempEL = document.createElement("div") 
                tempEL.setAttribute("class", "errorMessage")
                tempEL.innerText = "Nothing matches your search. Try Load More."
                mainEL.appendChild(tempEL)
             } else {

                 for(const ele of noTypesArrayNew) {
                     let tempEL = document.createElement('div')
                     tempEL.classList.add('cardBlock')
                     let tempImage = ""
                     if(ele.imageUrl) {
                       tempImage = ele.imageUrl
                     } else {
                         tempImage = "https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?pid=ImgDet&rs=1"
                     }
                     tempEL.setAttribute("name", `${ele.multiverseid}`);
                     tempEL.innerHTML = `<img class = "cardIMG" src=${tempImage} name = ${ele.multiverseid}>
                     <p name = ${ele.multiverseid}>${ele.name}</p>`
                     tempEL.addEventListener("click", cardClicked)
                     mainEL.appendChild(tempEL)
                  }
             }
        })
    }

    if(value === "5") {
        menu2.setAttribute("class", "hide")
        menu3.setAttribute("class", "hide")
        menu4.setAttribute("class", "hide")
        menu5.setAttribute("class", "hide")
        menu6.setAttribute("class", "hide")
        menu7.setAttribute("class", "show")

        menu7.addEventListener("keyup", function(event) {
            console.log("If statement", typeof(event.target.value))
            console.log('type of cards' , cards);
            let noCmcArray = cards.filter(card => card.name && card.imageUrl && card.multiverseid);
            let noCmcArrayNew = noCmcArray.filter(card => card.name.includes(event.target.value))
           
            console.log("Filtered Array", noCmcArrayNew)

            let mainEL = document.getElementById('main')
            mainEL.innerHTML = ""
            if(noCmcArrayNew.length === 0) {
                let tempEL = document.createElement("div") 
                tempEL.setAttribute("class", "errorMessage")
                tempEL.innerText = "Nothing matches your search. Try Load More."
                mainEL.appendChild(tempEL)
             } else {

                 for(const ele of noCmcArrayNew) {
                     let tempEL = document.createElement('div')
                     tempEL.classList.add('cardBlock')
                     let tempImage = ""
                     if(ele.imageUrl) {
                       tempImage = ele.imageUrl
                     } else {
                         tempImage = "https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?pid=ImgDet&rs=1"
                     }
                     tempEL.setAttribute("name", `${ele.multiverseid}`);
                     tempEL.innerHTML = `<img class = "cardIMG" src=${tempImage} name = ${ele.multiverseid}>
                     <p name = ${ele.multiverseid}>${ele.name}</p>`
                     tempEL.addEventListener("click", cardClicked)
                     mainEL.appendChild(tempEL)
                  }
             }
        })
    }

    if(value === "100") {
        menu2.setAttribute("class", "hide")
        menu3.setAttribute("class", "hide")
        menu4.setAttribute("class", "hide")
        menu5.setAttribute("class", "hide")
        menu6.setAttribute("class", "hide")
        menu7.setAttribute("class", "hide")

        
    }
})