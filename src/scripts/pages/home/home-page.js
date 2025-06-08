export default class HomePage {
  async render() {
    return `
      <section id="background" class="hero-section bg-black text-white py-5 position-relative overflow-hidden">
        <div class="container">
          <div class="row align-items-center">
            <!-- Teks utama -->
            <div class="col-md-7 text-center text-md-start">
              <h1 class="fw-bold display-6 lh-sm mb-5">
                Wayang is more than art – it's <span class="text-primary">wisdom passed</span> through generations 
                <img src="images/Vector.png" class="img-fluid w-100" alt="Pattern Border" style="max-width: 35px;" />
              </h1>
              
              <div class="d-flex gap-3 flex-column flex-md-row justify-content-center justify-content-md-start">
                <a href="#" class="btn btn-warning fw-semibold rounded-pill px-6 py-2">Enter the World <img src="images/ArrowRight.png" class="img-fluid w-100" alt="Pattern Border" style="max-width: 20px;" /></a>
                <a href="#" class="btn btn-outline-light fw-semibold rounded-pill px-4 py-2">Scan, learn, and become part of the cultural journey</a>
              </div>
            </div>

            <div class="wayang-wrapper col-md-4 text-center mt-4 mt-md-0 position-relative">
            <!-- Gambar utama wayang -->
            <img src="images/decoration-image-1.png" class="img-fluid mb-2 position-relative z-2" alt="Wayang Image" style="max-height: 300px;" />

            <!-- Gambar pagar dekoratif -->
            <img src="images/decoration-overview-1.png" class="pattern-decor position-absolute" alt="Pattern Border"/>
          </div>

            
          </div>

        </div>
      </section>

      <section class="bg-black text-white py-5 position-relative overflow-hidden">
        <div class="container position-relative z-1">
          <div class="p-4 p-md-5 rounded-4 bg-glass text-white position-relative shadow-lg border border-2 border-white">
            <!-- Icon atas -->
            <img src="images/star.png" class="position-absolute top-0 start-50 translate-middle-y" style="height: 65px;" alt="Star Icon">
           
            <h2 class="fw-bold text-gradient mb-3">Wayang in the Digital Era – Preserving What’s Being Forgotten</h2>
            <p class="mb-0">
              Interest among younger generations in wayang is steadily declining due to the lack of engaging and easy-to-understand learning methods—even 75% of wayang characters are at risk of being forgotten within a generation.
              Arjuna offers an interactive learning experience with storytelling, character recognition through images, and educational battle games.
            </p>
          </div>
        </div>
      </section>



      <!-- SECTION 2 -->
     <section id="how" class="section-highlight text-dark py-5 position-relative overflow-hidden bg-white rounded-top-5">
        <div class="container">
          <div class="row align-items-center">
            <!-- Kiri: teks dan tombol -->
            <div class="col-md-6 position-relative z-1">
              <h2 class="fw-bold display-8 mb-4 text-danger" style="font-family: 'Dela Gothic One', cursive;">
                Discover Wayang with Arjuna –<br>Scan, Learn and Play
              </h2>

              <div class="p-4 rounded-4 bg-orange border border-4 border-black position-relative shadow-black" style="max-width: 420px;">
                <p class="text-black mb-3" style="font-family: 'Quicksand', sans-serif;">
                  Start by using a QR-ready phone and be walked effortlessly into wayang! Our Arjuna Scanner recognizes any wayang, shows its backstory in an instant, and even helps spark a battle in our exclusive digital battle game.
                </p>
                <a href="#" class="btn-neon-green">Start Now</a>

                <!-- Dekorasi: Bintang -->
                <img src="images/decoration-how-info-4.png" alt="star" class="position-absolute" style="top: -20px; left: -20px; width: 55px;">
              </div>

              <!-- Dekorasi: spiral garis -->
              <div class="icon position-absolute" style="top: 100px; left: 90%; transform: translateX(-50%);">
                <img src="images/redarrow.png" alt="spiral" style="width: 100px;">
              </div>
            </div>

            <!-- Kanan: Gambar Wayang -->
            <div class="col-md-6 mt-4 mt-md-0 text-center position-relative z-1">
              <div class="d-flex justify-content-center gap-2 flex-wrap">
                <img src="images/triowayang.png" class="img-fluid rotated-img" alt="Wayang" style="max-width: 500px;"
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: Roadmap Arjuna -->
    <section id="plan" class="bg-primary text-white py-5 position-relative overflow-hidden" style="border-bottom-left-radius: 2rem; border-bottom-right-radius: 2rem;">
      <div class="container">
        <!-- Judul dan deskripsi -->
        <div class="text-center mb-5">

         <!-- circle between phases -->
              <img src="images/circle.png" class="icon img-fluid" alt="arrow" style="height: 70px;">
            
          
          <h2 class="fw-bold bg-white text-dark px-4 py-2 rounded-pill d-inline-block" style="font-family: 'Dela Gothic One', cursive;">
            Building the Next Chapter of Arjuna
          </h2>
          <p class="mt-3" style="max-width: 600px; margin: 0 auto;">
            Arjuna is more than just a cultural game—it's a growing platform to preserve and reintroduce wayang to the digital generation.
            Our journey is divided into two phases over the next 6 months, beginning with a solid MVP and ending with full cultural integration and collaboration.
          </p>
        </div>

        <!-- Dua fase -->
        <div class="row text-center align-items-center position-relative">
          <!-- Phase 1 -->
          <div class="col-md-5">
            <div class="bg-white text-dark rounded-4 p-4 border border-dark position-relative" style="min-height: 280px;">
              <div class="bg-lime text-dark fw-bold rounded-pill px-4 py-2 d-inline-block mb-3">
                Phase 1 – MVP Launch
              </div>
              <p class="small">
                We'll launch a basic version of Arjuna with image recognition for 12 wayang characters.
                Each character will display short-form stories and animations. Core battle game logic will also be released, centered around a simple educational battle game.
              </p>
              <img src="images/redstar.png" class="position-absolute" style="width: 67px; bottom: -5px; right: -10px;" alt="bintang">
            </div>
          </div>

          <!-- Arrow between phases -->
          <div class="col-md-2 d-none d-md-block">
            <div class="d-flex justify-content-center align-items-center h-100">
              <img src="images/arrow.png" class="img-fluid" alt="arrow" style="height: 30px;">
            </div>
          </div>

          <!-- Phase 2 -->
          <div class="col-md-5 mt-4 mt-md-0">
            <div class="bg-white text-dark rounded-4 p-4 border border-dark position-relative" style="min-height: 280px;">
              <div class="bg-success text-white fw-bold rounded-pill px-4 py-2 d-inline-block mb-3">
                Phase 2 – Expansion & Collaboration
              </div>
              <p class="small">
                We'll upgrade to a role-solving gameplay experience with enhanced visuals, character skills, and collectibles. 
                Partnerships with cultural institutions will be explored to ensure a digital gateway. 
                Hand-in-hand, we'll introduce Quizzes, AR missions, and special content.
              </p>
              <img src="images/lightning.png" class="position-absolute" style="width: 30px; bottom: -10px; left: -10px;" alt="petir">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Team Arjuna -->
    <section id="team" class="bg-black text-white py-5 position-relative overflow-hidden">

       <div class="container d-flex justify-content-center align-items-center" style="min-height: 40vh;">
      <div class="custom-glass-box text-center">
        <h2 class="fw-bold custom-title mb-3">Meet the Minds Behind Arjuna</h2>
        <p class="mt-3 mx-auto custom-paragraph">
          Arjuna is built by a passionate team blending culture, code, and intelligence.
          Our Full Stack Developer crafts the entire user journey, and our Machine Learning Engineers power the AI 
          to recognize wayang characters smartly and seamlessly.
        </p>
      </div>
    </div>

        <div class="row g-4 justify-content-center">
        
      <!-- Team Member Card 1 -->
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="text-center my-3">
          <img src="images/Frame 74.png" alt="Nazila" class="rounded-4 shadow" style="width: 100%; height: auto;">
        </div>
      </div>

      <!-- Team Member Card 2 -->
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="text-center my-3">
          <img src="images/Frame 75.png" alt="Nazila" class="rounded-4 shadow" style="width: 100%; height: auto;">
        </div>
      </div>

      <!-- Team Member Card 3 -->
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="text-center my-3">
          <img src="images/Frame 76.png" alt="Nazila" class="rounded-4 shadow" style="width: 100%; height: auto;">
        </div>
      </div>
    </div>

    <div class="row g-4 justify-content-center">
      <!-- Team Member Card 1 -->
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="text-center my-3">
          <img src="images/Frame 77.png" alt="Nazila" class="rounded-4 shadow" style="width: 100%; height: auto;">
        </div>
      </div>

      <!-- Team Member Card 2 -->
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="text-center my-3">
          <img src="images/Frame 78.png" alt="Nazila" class="rounded-4 shadow" style="width: 100%; height: auto;">
        </div>
      </div>

      <!-- Team Member Card 3 -->
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="text-center my-3">
          <img src="images/Frame 79.png" alt="Nazila" class="rounded-4 shadow" style="width: 100%; height: auto;">
        </div>
      </div>
    </div>

    </div>
  </div>

    <footer class="footer-red text-center text-white mt-5 px-3 py-4">
    <p class="mb-3">
      At Arjuna, we believe tradition doesn’t belong in the past — it deserves to grow with the future. 
      Through technology, we’re not just preserving culture, but making it meaningful, playable, and alive for the next generation.
    </p>
    <small>© 2025 Arjuna Project. All rights reserved</small>
  </footer>

</section>


    `;
  }

  async afterRender() {
    // Bisa tambahkan animasi atau interaksi di sini nanti
  }
}
