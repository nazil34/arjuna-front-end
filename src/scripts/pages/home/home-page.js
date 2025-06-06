export default class HomePage {
  async render() {
    return `
      <section class="hero-section bg-black text-white py-5 position-relative overflow-hidden">
        <div class="container">
          <div class="row align-items-center">
            <!-- Teks utama -->
            <div class="col-md-7 text-center text-md-start">
              <h1 class="fw-bold display-6 lh-sm mb-4">
                Wayang is more than art – it's <span class="text-primary">wisdom passed</span> through generations
              </h1>
              <div class="d-flex gap-3 flex-column flex-md-row justify-content-center justify-content-md-start">
                <a href="#" class="btn btn-warning fw-semibold rounded-pill px-6 py-2">Enter the World</a>
                <a href="#" class="btn btn-outline-light fw-semibold rounded-pill px-4 py-2">Scan, learn, and become part of the cultural journey</a>
              </div>
            </div>

            <!-- Gambar ilustrasi -->
            <div class="col-md-4 text-center mt-4 mt-md-0 position-relative">
              <img src="images/decoration-image-1.png" class="img-fluid mb-2" alt="Wayang Image" style="max-height: 300px;" />
              <!-- Gambar pagar di bawah -->
              <img src="assets/images/decoration-overview-1.png" class="img-fluid w-100" alt="Pattern Border" style="max-width: 300px;" />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-black text-white py-5 position-relative overflow-hidden">
        <div class="container position-relative z-1">
          <div class="p-4 p-md-5 rounded-4 bg-glass text-white position-relative shadow-lg border border-2 border-white">
            <!-- Icon atas -->
            <img src="images/star-icon.png" class="position-absolute top-0 start-50 translate-middle-y" style="height: 40px;" alt="Star Icon">
            <img src="images/deco-dot.png" class="position-absolute top-0 end-0 translate-middle-x" style="height: 30px;" alt="Dot Icon">

            <h2 class="fw-bold text-gradient mb-3">Wayang in the Digital Era – Preserving What’s Being Forgotten</h2>
            <p class="mb-0">
              Interest among younger generations in wayang is steadily declining due to the lack of engaging and easy-to-understand learning methods—even 75% of wayang characters are at risk of being forgotten within a generation.
              Arjuna offers an interactive learning experience with storytelling, character recognition through images, and educational battle games.
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 2 -->
      <section class="section-highlight text-dark py-5 position-relative overflow-hidden bg-white">
        <div class="container">
          <div class="row align-items-center">
            <!-- Kiri: teks dan tombol -->
            <div class="col-md-6 position-relative z-1">
              <h2 class="fw-bold display-5 mb-4 text-danger" style="font-family: 'Dela Gothic One', cursive;">
                Discover Wayang with Arjuna –<br>Scan, Learn and Play
              </h2>

              <div class="p-4 rounded-4 bg-orange border border-4 border-success position-relative shadow" style="max-width: 420px;">
                <p class="text-white mb-3" style="font-family: 'Quicksand', sans-serif;">
                  Start by using a QR-ready phone and be walked effortlessly into wayang! Our Arjuna Scanner recognizes any wayang, shows its backstory in an instant, and even helps spark a battle in our exclusive digital battle game.
                </p>
                <a href="#" class="btn btn-lime text-dark fw-bold rounded-pill px-4 py-2">Start Now</a>

                <!-- Dekorasi: Bintang -->
                <img src="images/star-icon.png" alt="star" class="position-absolute" style="top: -20px; left: -20px; width: 30px;">
              </div>

              <!-- Dekorasi: spiral garis -->
              <div class="position-absolute" style="top: 100px; left: 90%; transform: translateX(-50%);">
                <img src="images/spiral.png" alt="spiral" style="width: 40px;">
              </div>
            </div>

            <!-- Kanan: Gambar Wayang -->
            <div class="col-md-6 mt-4 mt-md-0 text-center position-relative z-1">
              <div class="d-flex justify-content-center gap-3 flex-wrap">
                <img src="images/wayang1.png" class="img-fluid rotated-img" alt="Wayang 1" style="max-width: 100px;">
                <img src="images/wayang2.png" class="img-fluid rotated-img" alt="Wayang 2" style="max-width: 100px;">
                <img src="images/wayang3.png" class="img-fluid rotated-img" alt="Wayang 3" style="max-width: 100px;">
              </div>

              <!-- Dekorasi: Lingkaran Hijau -->
              <div class="position-absolute" style="top: -30px; right: 30px;">
                <div class="rounded-circle bg-success" style="width: 60px; height: 60px;"></div>
              </div>
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
