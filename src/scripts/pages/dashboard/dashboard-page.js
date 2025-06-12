export default class DashboardPage {
  async render() {
    return `
      <section class="dashboard-section py-5">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 class="title mb-1 text-danger" style="font-family: 'Dela Gothic One', cursive;">Your Journey So Far</h2>
              <p class="text-black subtitle">You've awakened <strong>1</strong> of <strong>22</strong> wayang spirits.</p>
            </div>
            <a href="#/predict" class="btn btn-lg rounded-pill text-black text-bold" style="background-color: #C6F806;">
                Summon New Character <span class="ms-2">→</span>
            </a>

          </div>

          <div class="row g-4 mb-5">
            <div class="col-md-6">
                <div class="card bg-orange text-white shadow-box h-100 d-flex flex-row align-items-center p-3 gap-3">
                <img src="images/wayangdsb.png" alt="Spirit Icon" class="info-icon" />
                <div>
                    <h5 class="card-title">Spirits Awakened</h5>
                    <p class="card-text">Your bond with the realm grows stronger.</p>
                    <h3>1 <small class="text-white-50">of 22</small></h3>
                </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card bg-blue text-white shadow-box h-100 d-flex flex-row align-items-center p-3 gap-3">
                <img src="images/coin1.png" alt="Mandala Icon" class="info-icon" />
                <div>
                    <h5 class="card-title">Mandala’s Formed</h5>
                    <p class="card-text">Your circle grows — one Mandala forms in harmony.</p>
                    <h3>1500</h3>
                </div>
                </div>
            </div>
            </div>


          <div class="row row-cols-2 row-cols-md-4 g-4">
            <!-- Card 1: Terbuka -->
            <div class="col">

              <a href="#/game" class="character-card text-center h-200 text-decoration-none text-black">
                <img src="images/arjuna-project/arjuna.png" class="character-img" alt="Arjuna">
                <div class="character-name">Arjuna</div>
                </a>


            </div>

            ${[...Array(19)].map(() => `
            <div class="col">
                <div class="character-card locked text-center character-card-clickable">
                <div class="locked-icon">?</div>
                <div class="character-name">????</div>
                </div>
            </div>
            `).join('')}


          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
      const token = localStorage.getItem('token');
        if (!token) window.location.href = '#/signin';

        import('../../utils/auth-status').then(({ default: AuthStatus }) => {
          AuthStatus.check();
        });

    const lockedCards = document.querySelectorAll('.character-card-clickable');

  lockedCards.forEach(card => {
    card.addEventListener('click', () => {
      import('sweetalert2').then(Swal => {
        Swal.default.fire({
          icon: 'info',
          title: 'Masih dalam pengembangan',
          text: 'Karakter ini belum tersedia.',
          confirmButtonColor: '#C6F806'
        });
      });
    });
  });
  }
}
