


const cardBoard = document.querySelector('#cardBoard')

const imagem = [
    'angular.svg',
    'aurelia.svg',
    'backbone.svg',
    'ember.svg',
    'react.svg',
    'vue.svg'
];

let cardHtml = '';

imagem.forEach(img => {
    cardHtml += `
    <div class='MemoryCard' data-card = '${img}'>
    <img class='frontFace' src='img/${img}'>
    <img class='backFace' src='img/js-badge.svg'>
    </div>
    `
    
});

cardBoard.innerHTML = cardHtml + cardHtml;


const cards = document.querySelectorAll('.MemoryCard')

let firstCard, secondCard;
let lockCard = false

 function flipCard() {

    if(lockCard) return false

    this.classList.add('flip');

    if(!firstCard){
        
        firstCard = this;

       return false;

    }

    secondCard = this;

    Check()
 }

function Check(){

    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    !isMatch ? disableCards() : resetCard(isMatch)
}

function disableCards(){
    lockCard = true
    setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
   
    resetCard();
    }, 1000);  
}

(function Ramdom() {
    cards.forEach( card => {
        let rand = Math.floor(Math.random()*12)
        card.style.order = rand
    })
})()

function resetCard(isMatch = false){
    
    if(isMatch){
       firstCard.removeEventListener('click' , flipCard)
       secondCard.removeEventListener('click' , flipCard)
    }
    
    firstCard = null
    secondCard = null
    lockCard = false

}


cards.forEach(card => card.addEventListener('click', flipCard))

/*================================================================*/
