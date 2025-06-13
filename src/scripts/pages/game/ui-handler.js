export function setupUI(player) {
  const skillButtonsContainer = document.getElementById("skill-buttons");
  skillButtonsContainer.innerHTML = "";
  player.skills.forEach((skill, index) => {
    const btn = document.createElement("button");
    btn.id = `skill-btn-${index}`;
    btn.className = "skill-btn";
    btn.textContent = skill.namaSkill;
    btn.onclick = () => window.dispatchEvent(new CustomEvent("skillUsed", { detail: index }));
    skillButtonsContainer.appendChild(btn);
  });
}

export function updateUI(player, enemy) {
  document.getElementById("player-hp-bar").style.width = `${(player.hp / player.maxHP) * 100}%`;
  document.getElementById("player-sp-bar").style.width = `${(player.sp / player.maxSP) * 100}%`;
  document.getElementById("enemy-hp-bar").style.width = `${(enemy.hp / enemy.maxHP) * 100}%`;
  document.getElementById("enemy-sp-bar").style.width = `${(enemy.sp / enemy.maxSP) * 100}%`;

  player.skills.forEach((skill, index) => {
    const btn = document.getElementById(`skill-btn-${index}`);
    if (btn) {
      btn.disabled = player.sp < skill.tenagaSukma || skill.onCooldown;
    }
  });
}

export function showEffectPopup(message) {
  const popup = document.getElementById("effect-popup");
  popup.textContent = message;
  popup.classList.remove("hidden");
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.classList.add("hidden"), 400);
  }, 400);
}
