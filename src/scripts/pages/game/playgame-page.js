import PlayGamePresenter from './playgame-presenter';

export default class PlayGamePage {
  async render() {
    return `
      <div id="game-root">
        <div id="game-wrapper">
          <a href="#/game" id="back-btn">← Back</a>

          <div id="game-container">
            <div id="projectiles"></div>
            <div id="effect-popup" class="hidden"></div>
            <img id="player" src="images/arjuna-project/arjuna.png" alt="Player">
            <img id="enemy" src="images/arjuna-project/duryodana.png" alt="Enemy">
          </div>

          <div id="ui-container">
            <div class="char-ui">
              <h2>Arjuna</h2>
              <div class="bar-label">HP</div>
              <div class="hp-bar-container">
                <div id="player-hp-bar" class="hp-bar"></div>
              </div>
              <div class="bar-label">Tenaga Sukma</div>
              <div class="sp-bar-container">
                <div id="player-sp-bar" class="sp-bar"></div>
              </div>
            </div>

            <div id="skill-ui">
              <h2>Skills</h2>
              <div id="skill-buttons"></div>
            </div>

            <div class="char-ui">
              <h2>Duryudana</h2>
              <div class="bar-label">HP</div>
              <div class="hp-bar-container">
                <div id="enemy-hp-bar" class="hp-bar"></div>
              </div>
              <div class="bar-label">Tenaga Sukma</div>
              <div class="sp-bar-container">
                <div id="enemy-sp-bar" class="sp-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  async afterRender() {
    PlayGamePresenter.init();
  }
}
