
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


function result(userChoise , computerChoise ) {

    if (userChoise == 'stone' && computerChoise == "stone") {
        score[2]++;
        return alert(`tied`),tie;
    } 
    else if(userChoise == 'stone' && computerChoise == 'paper') {
        score[1]++;
        return alert(`You Lose`),lose;
    } 
    else if(userChoise == 'stone' && computerChoise == 'scissors') {
        score[0]++;
        return alert(`You Win`),win;
    } 
    else if(userChoise == 'paper' && computerChoise == 'stone') {
        score[0]++;
        return alert(`You Win`),win;
    } 
    else if(userChoise == 'paper' && computerChoise == 'paper') {
        score[2]++;
        return alert(`Tied`),tie;
    }
    else if(userChoise == 'paper' && computerChoise == 'scissors') {
        score[1]++;
        return alert(`You Lose`),lose;
    } 
    else if(userChoise == 'scissors' && computerChoise == 'stone') {
        score[2];
        return alert(`tied`),tie;
    }
    else if(userChoise == 'scissors' && computerChoise == 'paper') {
        score[1]++;
        return alert(`You Lose`),lose;
    }
    else if(userChoise == 'scissors' && computerChoise == 'scissors') {
        score[0]++;
        return alert(`You Win`),win;
    } 
} 

function scoreDisplay(win,tie,lose) {
    alert(`your number of win : ${score[0]}\nyour number of defeat : ${score[1]}\nyour number of tied matches : ${score[2]}`)
}
