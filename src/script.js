
// computer chooses its move via this fxn
function computerChoise() {
    let computerChoise = ''
    const randomNum = 3*(Math.random())

    if (randomNum < 1) {
        return (computerChoise = 'scissors')
    } else if (1 <= randomNum && randomNum < 2) {
        return (computerChoise = 'paper')
    } else if (2 <= randomNum < 3) {
        return (computerChoise = 'stone')
    };
}

// it stores the result
const scoreObj = {win:0,lose:0,tie:0}

//  this finds the winner by comparing choesn value of both comp and user
function result(userChoise , computerChoise ) {
    if (userChoise == 'stone' && computerChoise == "stone") {
        scoreObj.tie++;
        return {winner:'You Tied', userChoise , computerChoise}
    }
    else if(userChoise == 'stone' && computerChoise == 'paper') {
        scoreObj.lose++;
        return {winner:'You Lose', userChoise , computerChoise}
    } 
    else if(userChoise == 'stone' && computerChoise == 'scissors') {
        scoreObj.win++;
        return {winner:'You win', userChoise , computerChoise}
    } 
    else if(userChoise == 'paper' && computerChoise == 'stone') {
        scoreObj.win++;
        return {winner:'You win', userChoise , computerChoise}
    } 
    else if(userChoise == 'paper' && computerChoise == 'paper') {
        scoreObj.tie++;
        return {winner:'You Tied', userChoise , computerChoise}
    }
    else if(userChoise == 'paper' && computerChoise == 'scissors') {
        scoreObj.lose++;
        return {winner:'You Lose', userChoise , computerChoise}
    } 
    else if(userChoise == 'scissors' && computerChoise == 'stone') {
        scoreObj.lose++;
        return {winner:'You Lose', userChoise , computerChoise}
    }
    else if(userChoise == 'scissors' && computerChoise == 'paper') {
        scoreObj.win++;
        return {winner:'You win', userChoise , computerChoise}
    }
    else if(userChoise == 'scissors' && computerChoise == 'scissors') {
        scoreObj.tie++;
        return {winner:'You Tied', userChoise , computerChoise}
    } 
} 

var scoreDisplay = document.querySelector(".js-score")
var winTab = document.querySelector(".js-insert")


function scoreInsert( resultObj ) { 
    winTab.innerHTML = 
    `
    <p class = 'center' >${resultObj.winner}</p>
    You choose:<img src="images/${resultObj.userChoise}.png" alt="${resultObj.userChoise}">
    --and--
    Computer choose:<img src="images/${resultObj.computerChoise}.png" alt="${resultObj.computerChoise}">
    `

    scoreDisplay.innerHTML = `Win: ${scoreObj.win} Losses: ${scoreObj.lose} Ties: ${scoreObj.tie}`
}

function scoreReset() {
    scoreObj.win = 0
    scoreObj.lose = 0
    scoreObj.tie = 0
    winTab.innerHTML = ``
    scoreDisplay.innerHTML = `Win: ${scoreObj.win} Losses: ${scoreObj.lose} Ties: ${scoreObj.tie}`
}