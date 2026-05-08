let aiScore = 0;
let playerScore = 0;

const icons = {
  keo: "✌",
  bua: "✊",
  bao: "✋",
};

const winMap = {
  keo: "bua",
  bua: "bao",
  bao: "keo",
};

// Audio system
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// 🎮 âm click (chọn tay)
function clickSound() {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "square";
  osc.frequency.value = 700;

  gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.1);
}

// 🤔 âm suy nghĩ (giống ticking nhẹ)
function thinkingSound() {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.value = 250;

  gain.gain.setValueAtTime(0.08, audioCtx.currentTime);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.4);
}

// 🏆 âm thắng (cao + vui)
function winSound() {
  const notes = [600, 800, 1000];

  notes.forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "triangle";
    osc.frequency.value = freq;

    gain.gain.setValueAtTime(0.2, audioCtx.currentTime + i * 0.1);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioCtx.currentTime + i * 0.1 + 0.2,
    );

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime + i * 0.1);
    osc.stop(audioCtx.currentTime + i * 0.1 + 0.2);
  });
}

// mở khóa âm thanh
document.addEventListener(
  "click",
  () => {
    audioCtx.resume();
  },
  { once: true },
);

function play(playerChoice) {
  const resultBox = document.getElementById("result");
  const aiHand = document.getElementById("aiHand");
  const playerHand = document.getElementById("playerHand");

  clickSound();

  playerHand.innerHTML = icons[playerChoice];

  aiHand.innerHTML = "🤔";
  resultBox.innerHTML = "🧑 Hùng Khôn Hii đang suy nghĩ...";

  thinkingSound();

  setTimeout(() => {
    const aiChoice = winMap[playerChoice];

    aiHand.innerHTML = icons[aiChoice];

    winSound();

    aiScore++;

    resultBox.innerHTML = `
      🧑 Hùng Khôn Hii chọn: ${aiChoice} <br>
      🧍 Bạn chọn: ${playerChoice} <br><br>
      🧑 Hùng Khôn Hii thắng! 😎
    `;
  }, 900);
}
