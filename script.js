let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscor = document.querySelector("#userscore");
const compscor = document.querySelector("#compscore");

const gencompchoice = () => { //function to generate random indices
    const compchoice = ["rock", "paper", "scissor"];
    const randindx = Math.floor(Math.random() * 3);
    return compchoice[randindx];
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        console.log("youwin");
        userscore++;
        userscor.innerText = userscore;
        msg.innerText = `You Win ! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        console.log("youlose");
        compscore++;
        compscor.innerText = compscore;
        msg.innerText = `You Lose ! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawgame = () => {
    console.log("the match is draw");
    msg.innerText = "Match Draw!";
    msg.style.backgroundColor = "grey";
};

const playgame = (userchoice) => {  //funtion to playgame
    console.log("userchoice = ", userchoice);
    const compchoice = gencompchoice();
    console.log("compchoice = ", compchoice);
    if (userchoice === compchoice) {
        //draw
        drawgame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }


};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});