const hScore = document.querySelector('#h-score')
const aScore = document.querySelector('#a-score')
const result = document.querySelector('.result')
const humanPlay = document.querySelector('#human-play')
const alexaPlay = document.querySelector('#alexa-play')

let humanScore = 0
let alexaScore = 0

const playHuman = (humanChoice) => {

    game(humanChoice, playAlexa())
    humanHistory(humanChoice)
}

const playAlexa = (alexaChoices) => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random()*3)

    return choices[randomNumber]
    
}

const game = (human, alexa) =>{
    console.log(' human: ' + human + ' Alexa: ' + alexa)

    if(alexa === 'rock'){
        alexaPlay.innerHTML = '&#x270A' 
    }
    if(alexa === 'paper'){
        alexaPlay.innerHTML = '&#x1F590' 
    }
    if(alexa === 'scissors'){
        alexaPlay.innerHTML = '&#x270C' 
    }

   if( human === alexa){
        result.innerHTML = "Empatou"
    }

    else if(human === 'rock' && alexa === 'scissors' || human === 'paper' && alexa === 'rock' 
    || human === 'scissors' && alexa === 'paper'){
        result.innerHTML = 'você venceu'
        humanScore++
        hScore.innerHTML = humanScore
    }

    else{
        result.innerHTML = 'Alexa venceu'
        alexaScore++
        aScore.innerHTML = alexaScore
    }

}

const humanHistory = (human) => {

    if(human === 'rock'){
        humanPlay.innerHTML = '&#x270A'
        }
    if(human === 'paper'){
        humanPlay.innerHTML = '&#x1F590'
        }
    if(human === 'scissors'){
        humanPlay.innerHTML = '&#x270C'
    }
    
}


