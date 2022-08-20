// switch(card.symbole){
//     case 1:
//         symbole = "♣️"
//         break;
//     case 2:
//         symbole = "♦️"
//         break;
//     case 3:
//         symbole = "♥️"
//         break;
//     case 4:
//         symbole = "♠️"
//         break;
// }

let deck = [
    {
        symbole: "♣️",
        value: "K"
    },
    {
        symbole: "♦️",
        value: "Q"
    },
    {
        symbole: "♥️",
        value: "J"
    },
    {
        symbole: "♠️",
        value: "1"
    },
]

function CreateCard(card) {
    let clone = document.importNode(templateCard.content, true);
    
    let symbole = clone.querySelector('.symbole');
    symbole.textContent = card.symbole;
    
    let value = clone.querySelector('.value');
    value.textContent = card.value;

    return clone
}


let templateCard = document.querySelector('.template__card')
let deckContainer = document.querySelector('player-cards')

deck.forEach(deck => {
    deckContainer.appendChild(CreateCard(deck))
})