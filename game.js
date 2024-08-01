let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;  // Changed to boolean
        checkWinner();  // Call the function to check for winner after each move
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
                disableAllBoxes();
            }
        }
    }
};

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
