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

          <form>
            <div class="mb-3">
              <label class="form-label">Username</label>
              <input type="text" class="form-control rounded-3 py-2" placeholder="Enter your chosen Hero Name">
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control rounded-3 py-2" placeholder="Enter your Sky Scroll (e.g., hero@mail.com)">
            </div>
            <div class="mb-4">
              <label class="form-label">Password</label>
              <input type="password" class="form-control rounded-3 py-2" placeholder="Create your Secret Mantra">
            </div>
            <button type="submit" class="btn btn-start btn-lg w-80 rounded-pill fw-bold">
              Begin Your Adventure <span class="ms-2">→</span>
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
    // Bisa tambahkan animasi atau interaksi di sini nanti
  }
}
