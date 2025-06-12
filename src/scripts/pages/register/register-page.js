import RegisterPresenter from './register-presenter';

export default class RegisterPage {
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

                <h2 class="title mb-1"><span class="highlight">Join the Path of Destiny</span></h2>
                <p class="subtitle mb-4">One step closer to becoming a legend!</p>

                <form id="registerForm" novalidate>
                  <div class="mb-3">
                    <label class="form-label">Username</label>
                    <input type="text" id="registerUsername" class="form-control rounded-3 py-2" placeholder="Enter your chosen Hero Name" required>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" id="registerEmail" class="form-control rounded-3 py-2" placeholder="Enter your Sky Scroll (e.g., hero@mail.com)" required>
                  </div>

               <div class="mb-4">
              <label class="form-label">Password</label>
              <div class="position-relative">
                <input type="password" id="registerPassword" class="form-control rounded-3 py-2 pe-5" placeholder="Create your Secret Mantra" required>
                <button type="button" id="togglePassword" class="btn position-absolute top-50 end-0 translate-middle-y me-3 p-0 border-0 bg-transparent">
                  <i class="bi bi-eye-fill fs-5 text-primary"></i>
                </button>
              </div>
              <div id="passwordHelp" class="form-text text-danger d-none mt-1">
                Password minimal 8 karakter.
              </div>
            </div>

                 <button type="submit" id="registerBtn" class="btn btn-start btn-lg w-80 rounded-pill fw-bold">
                  Begin Your Adventure <span class="ms-2">→</span>
                </button>



                </form>
              </div>
            </div>

            <div class="wayang-wrapper col-md-4 text-center mt-4 mt-md-0 position-relative" data-aos="fade-down">
              <img src="images/decoration-image-1.png" class="img-fluid mb-2 position-relative z-2" alt="Wayang Image" style="max-height: 300px;" />
              <img src="images/decoration-overview-1.png" class="pattern-decor position-absolute" alt="Pattern Border"/>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Toggle password
    const passwordInput = document.getElementById('registerPassword');
    const toggleBtn = document.getElementById('togglePassword');
    const passwordHelp = document.getElementById('passwordHelp');
    const toggleIcon = toggleBtn.querySelector('i');

    toggleBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      toggleIcon.classList.toggle('bi-eye-fill', !isPassword);
      toggleIcon.classList.toggle('bi-eye-slash-fill', isPassword);
    });

    passwordInput.addEventListener('input', () => {
      passwordHelp.classList.toggle('d-none', passwordInput.value.length >= 8);
    });

    // ✅ Tambahkan listener untuk submit
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', RegisterPresenter.handleFormSubmit);

  }
}
