import GameEngine from './game-engine.js';

const PlayGamePresenter = {
  init() {
    GameEngine.initGame();

    document.addEventListener("keydown", this.handleKeyPress);
    window.addEventListener("skillUsed", this.handleSkillUse);
  },

  handleKeyPress(e) {
    const player = GameEngine.player;
    if (!player) return;
    const gameBounds = document.getElementById("game-container").getBoundingClientRect();
    if (e.key === "ArrowUp") {
      player.y = Math.max(0, player.y - 20);
    } else if (e.key === "ArrowDown") {
      player.y = Math.min(gameBounds.height - player.element.clientHeight, player.y + 20);
    }
    player.element.style.top = player.y + "px";
  },

  handleSkillUse(e) {
    const index = e.detail;
    const player = GameEngine.player;
    const skill = player.skills[index];
    if (player.sp >= skill.tenagaSukma && !skill.onCooldown) {
      player.sp -= skill.tenagaSukma;
      skill.onCooldown = true;
      skill.cooldownTimer = skill.cooldown;

      // tampilkan soal kuis
      import('./soal.js').then(({ default: soalAktivasiSkill }) => {
        const soal = soalAktivasiSkill[Math.floor(Math.random() * soalAktivasiSkill.length)];
        const questionEl = document.getElementById("quiz-question");
        const optionsEl = document.getElementById("quiz-options");
        const quizContainer = document.getElementById("quiz-container");

        questionEl.textContent = soal.pertanyaan;
        optionsEl.innerHTML = "";

        soal.pilihanJawaban.forEach((opt) => {
          const btn = document.createElement("button");
          btn.textContent = opt;
          btn.onclick = () => {
            quizContainer.classList.add("hidden");
            if (opt === soal.jawabanBenar) {
              // efek skill benar
              import('./ui-handler.js').then(({ showEffectPopup }) => {
                showEffectPopup(`${player.name} mengaktifkan ${skill.namaSkill}`);
              });
              if (skill.efek.heal) {
                player.hp = Math.min(player.maxHP, player.hp + player.maxHP * skill.efek.heal);
              }
              if (skill.durasi) {
                player.buffs.push({ ...skill, durationTimer: skill.durasi });
              }
            } else {
              import('./ui-handler.js').then(({ showEffectPopup }) => {
                showEffectPopup("Jawaban Salah!");
              });
            }
          };
          optionsEl.appendChild(btn);
        });

        quizContainer.classList.remove("hidden");
      });
    }
  },
};

export default PlayGamePresenter;
