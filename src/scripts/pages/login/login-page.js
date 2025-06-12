import LoginPresenter from './login-presenter';

export default class LoginPage {
  async render() {
    return `

    <section class="register-section py-5">
  <div class="container">

    
    
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-6" data-aos="fade-down">
        <div class="register-box p-4 rounded-4 shadow">
          <div class="icon-star mb-2">
            <img src="images/star.png" alt="Star Icon" class="icon-img">
          </div>

          
           <div class="icon-circle mb-2">
            <img src="images/greencircle.png" alt="Icon" class="icon-circle">
          </div>

          <div class="icon-spiral mb-2">
            <img src="images/spiral.png" alt="Icon" class="icon-spiral">
          </div>

          <h2 class="title mb-1"><span class="highlight">Return to Your Destiny</span></h2>
          <p class="subtitle mb-4">The battle continues. Ready your spirit.</p>

          <form id="loginForm" novalidate>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" id="loginEmail" class="form-control rounded-3 py-2" placeholder="Enter your Sky Scroll (e.g., hero@mail.com)">
            </div>

                <div class="mb-4">
              <label class="form-label">Password</label>
              <div class="position-relative">
                <input type="password" id="loginPassword" class="form-control rounded-3 py-2 pe-5" placeholder="Enter your Secret Mantra" required>
                <button type="button" id="togglePassword" class="btn position-absolute top-50 end-0 translate-middle-y me-3 p-0 border-0 bg-transparent">
                  <i class="bi bi-eye-fill fs-5 text-primary"></i>
                </button>
              </div>
            </div>

            <button type="submit" id="loginBtn" class="btn btn-start btn-lg w-80 rounded-pill fw-bold">
              Continue the Adventure <span class="ms-2">→</span>
            </button>
          </form>
          
        </div>
      </div>

       <div class="wayang-wrapper col-md-4 text-center mt-4 mt-md-0 position-relative" data-aos="fade-down">
            <!-- Gambar utama wayang -->
            <img src="images/decoration-image-1.png" class="img-fluid mb-2 position-relative z-2" alt="Wayang Image" style="max-height: 300px;" />

            <!-- Gambar pagar dekoratif -->
            <img src="images/decoration-overview-1.png" class="pattern-decor position-absolute" alt="Pattern Border"/>
          </div>
    </div>
  </div>
</section>


    `;
  }

  async afterRender() {
    const form = document.getElementById('loginForm');
      form.addEventListener('submit', LoginPresenter.handleFormSubmit);

      // Toggle password visibility
      const passwordInput = document.getElementById('loginPassword');
      const toggleBtn = document.getElementById('togglePassword');
      const toggleIcon = toggleBtn.querySelector('i');

      toggleBtn.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';

        toggleIcon.classList.toggle('bi-eye-fill', !isPassword);
        toggleIcon.classList.toggle('bi-eye-slash-fill', isPassword);
      });

  }
}
