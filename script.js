const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const catImage = document.getElementById("catImage");

const questionPage = document.getElementById("questionPage");
const successPage = document.getElementById("successPage");

let scale = 1;

const noTexts = [
    "No 😢",
    "Are you sure? 😭",
    "Really? 🥺",
    "Think again 😔",
    "Please? 😭",
    "Don't do this 😭",
    "Last chance 😢",
    "Why? 💔",
    "I'm sad now 😭"
];

const sadCats = [
    "https://media.tenor.com/5iKJx4Y8WJMAAAAC/cat-cute.gif",
    "https://media.tenor.com/1lM6rM1M3mIAAAAC/sad-cat.gif",
    "https://media.tenor.com/44qA6WJkM0YAAAAC/crying-cat.gif",
    "https://media.tenor.com/P4Q6YQ6dr9MAAAAC/cat-sad.gif"
];

let clickCount = 0;

noBtn.addEventListener("click", () => {

    scale += 0.3;

    yesBtn.style.transform = `scale(${scale})`;

    if(clickCount < noTexts.length - 1){
        clickCount++;
    }

    noBtn.textContent = noTexts[clickCount];

    catImage.src = sadCats[
        Math.min(
            Math.floor(clickCount / 2),
            sadCats.length - 1
        )
    ];

});

yesBtn.addEventListener("click", () => {

    questionPage.classList.add("hidden");
    successPage.classList.remove("hidden");

});