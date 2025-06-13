export default class GamePage {
  async render() {
    return `
      <section class="game-section container py-5">
        <div class="intro-box p-4 rounded-4 mb-5 text-white" style="background-color: #3f5efb;">
          <a href="#/" class="btn btn-outline-light mb-3">Back to Home</a>
          <h2 class="fw-bold mb-2" style="color: #c6ff00; border: none;">Where spirits clash and legends awaken</h2>
          <p class="text-white mb-3">Defeat enemies, collect Mandalas, and ascend as the chosen one</p>
          <a href="#/play" class="btn fw-semibold px-4 py-2" style="background-color: #c6ff00; color: black;">Start Game</a>
        </div>

        <div class="row justify-content-center align-items-center text-center">
          <div class="col-md-4 mb-4 d-flex justify-content-center">
            <div class="card game-card border-0 shadow" style="width: 200px;">
              <img src="images/arjuna-project/arjuna.png" alt="Arjuna" class="card-img-top rounded-0 border border-dark border-3" />
              <div class="card-body p-2">
                <button class="btn btn-primary w-100">Arjuna</button>
              </div>
            </div>
          </div>

          <div class="col-md-2 d-flex align-items-center justify-content-center">
            <h1 class="fw-bold" style="color: #c6ff00;">VS</h1>
          </div>

          <div class="col-md-4 mb-4 d-flex justify-content-center">
            <div class="card game-card border-0 shadow" style="width: 200px;">
              <img src="images/arjuna-project/duryodana.png" alt="Duryodana" class="card-img-top rounded-0 border border-dark border-3" />
              <div class="card-body p-2">
                <button class="btn btn-primary w-100">Duryodana</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Game logic goes here
  }
}
