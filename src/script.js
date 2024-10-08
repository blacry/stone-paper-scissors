
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

let score = [0,0,0] // first(0) win, sec(1) lose, third(2) tie
const scoreObj = {win:0,lose:0,tie:0}

function result(userChoise , computerChoise ) {

    if (userChoise == 'stone' && computerChoise == "stone") {
        scoreObj.tie++;
        return alert(`tied`),tie;
    } 
    else if(userChoise == 'stone' && computerChoise == 'paper') {
        scoreObj.lose++;
        return alert(`You Lose`),lose;
    } 
    else if(userChoise == 'stone' && computerChoise == 'scissors') {
        scoreObj.win++;
        return alert(`You Win`),win;
    } 
    else if(userChoise == 'paper' && computerChoise == 'stone') {
        scoreObj.win++;
        return alert(`You Win`),win;
    } 
    else if(userChoise == 'paper' && computerChoise == 'paper') {
        scoreObj.tie++;
        return alert(`Tied`),tie;
    }
    else if(userChoise == 'paper' && computerChoise == 'scissors') {
        scoreObj.lose++;
        return alert(`You Lose`),lose;
    } 
    else if(userChoise == 'scissors' && computerChoise == 'stone') {
        scoreObj.tie;
        return alert(`tied`),tie;
    }
    else if(userChoise == 'scissors' && computerChoise == 'paper') {
        scoreObj.lose++;
        return alert(`You Lose`),lose;
    }
    else if(userChoise == 'scissors' && computerChoise == 'scissors') {
        scoreObj.win++;
        return alert(`You Win`),win;
    } 
} 

function scoreDisplay(win,tie,lose) {
    alert(`your number of win : ${scoreObj.win}
        \nyour number of defeat : ${scoreObj.lose}
        \nyour number of tied matches : ${scoreObj.tie}`)
}

function scoreReset() {
    scoreObj.win = 0
    scoreObj.lose = 0
    scoreObj.tie = 0
    alert(`reseted to :-
        \nyour number of win : ${scoreObj.win}
        \nyour number of defeat : ${scoreObj.lose}
        \nyour number of tied matches : ${scoreObj.tie}`)
}