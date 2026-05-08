let playerScore = 0; // Bạn
let aiScore = 0; // Hùng Khôn Hii

const icons = {
  keo: "✌",
  bua: "✊",
  bao: "✋",
};

function play(playerChoice) {
  const resultBox = document.getElementById("result");

  resultBox.innerHTML = "🎲 Hùng Khôn Hii đang chọn...";

  const choices = ["keo", "bua", "bao"];

  setTimeout(() => {
    const aiChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("playerHand").innerHTML = icons[playerChoice];
    document.getElementById("aiHand").innerHTML = icons[aiChoice];

    let result = "";

    // 🧑 Hùng Khôn Hii thắng
    if (
      (aiChoice === "keo" && playerChoice === "bao") ||
      (aiChoice === "bua" && playerChoice === "keo") ||
      (aiChoice === "bao" && playerChoice === "bua")
    ) {
      aiScore++;
      result = "🧑 Hùng Khôn Hii thắng!";
    }
    // hòa
    else if (aiChoice === playerChoice) {
      result = "🤝 Hòa!";
    }
    // bạn thắng
    else {
      playerScore++;
      result = "🧍 Bạn thắng!";
    }

    document.getElementById("player").innerText = playerScore;
    document.getElementById("computer").innerText = aiScore;

    resultBox.innerHTML = `
      🧍 Bạn chọn: ${playerChoice} <br>
      🧑 Hùng Khôn Hii chọn: ${aiChoice} <br><br>
      ${result}
    `;
  }, 800);
}
