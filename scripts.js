const hScore = document.querySelector('#h-score')
const aScore = document.querySelector('#a-score')
const result = document.querySelector('.result')

let humanScore = 0
let alexaScore = 0

const playHuman = (humanChoice) => {

    game(humanChoice, playAlexa())
    
}

const playAlexa = (alexaChoices) => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random()*3)

    return choices[randomNumber]
}

const game = (human, alexa) =>{
    console.log(' human: ' + human + ' Alexa: ' + alexa)

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

