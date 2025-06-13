import baseStats from "./stats.js";
import { skillArjuna, skillDuryudana } from "./skill.js";
import soalAktivasiSkill from "./soal.js";

let playerElement, enemyElement, projectilesContainer, quizContainer, gameOverScreen;
let player, enemy;
let gameIsOver = false;

function initGame() {
  // Ambil elemen UI dari halaman yang dirender oleh SPA
  playerElement = document.getElementById("player");
  enemyElement = document.getElementById("enemy");
  projectilesContainer = document.getElementById("projectiles");
  quizContainer = document.getElementById("quiz-container");
  gameOverScreen = document.getElementById("game-over");

  // Inisialisasi player
  player = {
    ...baseStats,
    hp: baseStats.maxHP,
    sp: baseStats.maxSP,
    y: 200,
    element: playerElement,
    skills: skillArjuna.map((s) => ({ ...s, onCooldown: false, cooldownTimer: 0 })),
    buffs: [],
    name: "Arjuna",
  };

  // Inisialisasi enemy
  enemy = {
    ...baseStats,
    hp: baseStats.maxHP,
    sp: baseStats.maxSP,
    y: 200,
    direction: 1,
    element: enemyElement,
    skills: skillDuryudana.map((s) => ({ ...s, onCooldown: false, cooldownTimer: 0 })),
    buffs: [],
    name: "Duryudana",
  };

  setupUI();
  updateUI();
  player.element.style.top = player.y + "px";
  enemy.element.style.top = enemy.y + "px";

  setInterval(gameTick, 100);
  setInterval(regenerateSP, 2000);
  setInterval(playerAttack, 1000 / player.atkSpd);
  setInterval(enemyAttack, 1000 / enemy.atkSpd);

  document.addEventListener("keydown", handleKeyDown);
}

function gameTick() {
  if (gameIsOver) return;
  moveEnemy();
  enemyAI();
  updateCooldowns();
  updateBuffs();
  updateUI();
}

function setupUI() {
  const skillButtonsContainer = document.getElementById("skill-buttons");
  player.skills.forEach((skill, index) => {
    const btn = document.createElement("button");
    btn.id = `skill-btn-${index}`;
    btn.className = "skill-btn";
    btn.innerHTML = `${skill.namaSkill}`;
    btn.onclick = () => tryActivateSkill(index);
    skillButtonsContainer.appendChild(btn);
  });
}

function updateUI() {
  document.getElementById("player-hp-bar").style.width = `${(player.hp / player.maxHP) * 100}%`;
  document.getElementById("player-sp-bar").style.width = `${(player.sp / player.maxSP) * 100}%`;
  document.getElementById("enemy-hp-bar").style.width = `${(enemy.hp / enemy.maxHP) * 100}%`;
  document.getElementById("enemy-sp-bar").style.width = `${(enemy.sp / enemy.maxSP) * 100}%`;

  player.skills.forEach((skill, index) => {
    document.getElementById(`skill-btn-${index}`).disabled =
      player.sp < skill.tenagaSukma || skill.onCooldown;
  });
}

function showEffectPopup(message) {
  const popup = document.getElementById("effect-popup");
  popup.textContent = message;
  popup.classList.remove("hidden");
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.classList.add("hidden"), 400);
  }, 400);
}

function handleKeyDown(e) {
  if (gameIsOver) return;
  const gameBounds = document.getElementById("game-container").getBoundingClientRect();
  if (e.key === "ArrowUp") player.y = Math.max(0, player.y - 20);
  if (e.key === "ArrowDown") player.y = Math.min(gameBounds.height - player.element.clientHeight, player.y + 20);
  player.element.style.top = player.y + "px";
}

function playerAttack() {
  if (gameIsOver) return;
  createProjectile(player.element.offsetLeft + 60, player.y + 30, 1, player);
}

function enemyAttack() {
  if (gameIsOver) return;
  createProjectile(enemy.element.offsetLeft, enemy.y + 30, -1, enemy);
}

function createProjectile(x, y, direction, owner) {
  const proj = document.createElement("img");
  proj.src = "images/attack.png";
  proj.className = "projectile";
  proj.style.left = x + "px";
  proj.style.top = y + "px";
  if (direction === -1) proj.style.transform = "scaleX(-1)";
  projectilesContainer.appendChild(proj);

  const speed = 8;
  const interval = setInterval(() => {
    let left = parseInt(proj.style.left);
    proj.style.left = left + speed * direction + "px";
    if (left < -40 || left > 800) {
      clearInterval(interval);
      proj.remove();
    } else {
      const target = owner === player ? enemy : player;
      checkCollision(proj, target.element, () => {
        clearInterval(interval);
        proj.remove();
        dealDamage(owner, target);
      });
    }
  }, 20);
}

function checkCollision(proj, target, onHit) {
  const pRect = proj.getBoundingClientRect();
  const tRect = target.getBoundingClientRect();
  if (
    pRect.left < tRect.right &&
    pRect.right > tRect.left &&
    pRect.top < tRect.bottom &&
    pRect.bottom > tRect.top
  ) {
    onHit();
  }
}

function dealDamage(attacker, defender) {
  if (defender.buffs.some((b) => b.effect.immuneDamage)) return;
  const atkBuff = attacker.buffs.find((b) => b.effect.atk);
  const totalDamage = attacker.atk + (atkBuff ? attacker.atk * atkBuff.effect.atk : 0);
  defender.hp -= totalDamage;
  defender.element.classList.add("hit");
  setTimeout(() => defender.element.classList.remove("hit"), 300);
  checkGameOver();
}

function moveEnemy() {
  const gameBounds = document.getElementById("game-container").getBoundingClientRect();
  enemy.y += enemy.direction * enemy.moveSpd;
  if (enemy.y <= 0 || enemy.y >= gameBounds.height - enemy.element.clientHeight) {
    enemy.direction *= -1;
  }
  enemy.element.style.top = enemy.y + "px";
}

function enemyAI() {
  enemy.skills.forEach((skill) => {
    if (!skill.onCooldown && enemy.sp >= skill.tenagaSukma) {
      let useSkill = false;
      if (skill.namaSkill === "Daya Wisesa" && enemy.hp < enemy.maxHP * 0.4) {
        if (Math.random() < 0.02) useSkill = true;
      }
      if (skill.namaSkill === "Raja Tanpa Tunduk") {
        if (Math.random() < 0.01) useSkill = true;
      }
      if (useSkill) {
        enemy.sp -= skill.tenagaSukma;
        activateSkill(enemy, skill);
      }
    }
  });
}

function checkGameOver() {
  if (player.hp <= 0) endGame("Anda Kalah!");
  else if (enemy.hp <= 0) endGame("Anda Menang!");
}

function endGame(message) {
  if (gameIsOver) return;
  gameIsOver = true;
  document.getElementById("game-over-text").textContent = message;
  gameOverScreen.classList.remove("hidden");
}

function tryActivateSkill(skillIndex) {
  const skill = player.skills[skillIndex];
  if (player.sp >= skill.tenagaSukma && !skill.onCooldown) {
    player.sp -= skill.tenagaSukma;
    skill.onCooldown = true;
    skill.cooldownTimer = skill.cooldown;
    showQuiz(skill);
  }
}

function showQuiz(skill) {
  const q = soalAktivasiSkill[Math.floor(Math.random() * soalAktivasiSkill.length)];
  const questionEl = document.getElementById("quiz-question");
  const optionsEl = document.getElementById("quiz-options");
  questionEl.textContent = q.pertanyaan;
  optionsEl.innerHTML = "";
  q.pilihanJawaban.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      quizContainer.classList.add("hidden");
      if (opt === q.jawabanBenar) {
        activateSkillEffect(player, skill);
      } else {
        showEffectPopup("Jawaban Salah!");
      }
    };
    optionsEl.appendChild(btn);
  });
  quizContainer.classList.remove("hidden");
}

function activateSkillEffect(character, skill) {
  showEffectPopup(`${character.name} mengaktifkan ${skill.namaSkill}`);
  if (skill.efek.heal) {
    character.hp = Math.min(character.maxHP, character.hp + character.maxHP * skill.efek.heal);
  }
  if (skill.durasi) {
    character.buffs.push({ ...skill, durationTimer: skill.durasi });
  }
}

function activateSkill(character, skill) {
  activateSkillEffect(character, skill);
  skill.onCooldown = true;
  skill.cooldownTimer = skill.cooldown;
}

function updateBuffs() {
  [player, enemy].forEach((character) => {
    character.buffs = character.buffs.filter((buff) => {
      buff.durationTimer -= 0.1;
      return buff.durationTimer > 0;
    });
  });
}

function updateCooldowns() {
  [player, enemy].forEach((character) => {
    character.skills.forEach((skill) => {
      if (skill.onCooldown) {
        skill.cooldownTimer -= 0.1;
        if (skill.cooldownTimer <= 0) {
          skill.onCooldown = false;
          skill.cooldownTimer = 0;
        }
      }
    });
  });
}

function regenerateSP() {
  if (gameIsOver) return;
  if (player.sp < player.maxSP) player.sp += baseStats.spRegen;
  if (enemy.sp < enemy.maxSP) enemy.sp += baseStats.spRegen;
}

export default {
  initGame,
};
