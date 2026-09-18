let userScore = 0;
let computerScore = 0;

const choices = ["tosh", "qogoz", "qaychi"];

const images = {
    tosh: "✊",
    qogoz: "📄",
    qaychi: "✂️"
};

const names = {
    tosh: "Tosh",
    qogoz: "Qog‘oz",
    qaychi: "Qaychi"
};

function play(userChoice) {

    // Foydalanuvchi tanlovi
    document.getElementById("userChoice").textContent =
        images[userChoice];

    document.getElementById("userText").textContent =
        names[userChoice];

    // Kompyuter tasodifiy tanlaydi
    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("computerChoice").textContent =
        images[computerChoice];

    document.getElementById("computerText").textContent =
        names[computerChoice];

    let result = "";

    if (userChoice === computerChoice) {
        result = "🤝 Durrang!";
    }
    else if (
        (userChoice === "tosh" && computerChoice === "qaychi") ||
        (userChoice === "qogoz" && computerChoice === "tosh") ||
        (userChoice === "qaychi" && computerChoice === "qogoz")
    ) {
        userScore++;
        result = "🎉 Siz g‘olib bo‘ldingiz!";
    }
    else {
        computerScore++;
        result = "🤖 Sun’iy intellekt g‘olib bo‘ldi!";
    }

    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;

    document.getElementById("result").innerHTML =
        "Siz: " + names[userChoice] + " " + images[userChoice] +
        "<br>" +
        "Kompyuter: " + names[computerChoice] + " " + images[computerChoice] +
        "<br><br>" +
        result;
}

function restartGame() {
    userScore = 0;
    computerScore = 0;

    document.getElementById("userScore").textContent = "0";
    document.getElementById("computerScore").textContent = "0";

    document.getElementById("userChoice").textContent = "❔";
    document.getElementById("computerChoice").textContent = "❔";

    document.getElementById("userText").textContent =
        "Tanlovingiz";

    document.getElementById("computerText").textContent =
        "Kompyuter tanlovi";

    document.getElementById("result").textContent =
        "O‘yin boshlash uchun tanlov qiling!";
}