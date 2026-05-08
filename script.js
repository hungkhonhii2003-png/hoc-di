let aiScore = 0;
let playerScore = 0;

const icons = {
  keo: "✌",
  bua: "✊",
  bao: "✋",
};

function play(playerChoice) {
  const resultBox = document.getElementById("result");
  const aiHand = document.getElementById("aiHand");
  const playerHand = document.getElementById("playerHand");

  const choices = ["keo", "bua", "bao"];
  const aiChoice = choices[Math.floor(Math.random() * 3)];

  // hiện tay người chơi ngay
  playerHand.innerHTML = icons[playerChoice];

  // hiển thị trạng thái suy nghĩ
  aiHand.innerHTML = "🤔";
  resultBox.innerHTML = "🧑 Hùng Khôn Hii đang suy nghĩ...";

  setTimeout(() => {
    // hiện tay AI sau khi "suy nghĩ"
    aiHand.innerHTML = icons[aiChoice];

    let result = "";

    // AI thắng
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

    resultBox.innerHTML = `
      🧑 Hùng Khôn Hii chọn: ${aiChoice} <br>
      🧍 Bạn chọn: ${playerChoice} <br><br>
      ${result}
    `;
  }, 900);
}
