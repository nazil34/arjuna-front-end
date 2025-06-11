export default class HomePage {
  async render() {
    return `

      <section id="background" class="hero-section bg-black text-white py-5 position-relative overflow-hidden">
        <div class="container">
          <div class="row align-items-center">
            <!-- Teks utama -->
            <div class="col-md-7 text-center text-md-start">
              <h1 class="fw-bold display-6 lh-sm mb-5" data-aos="fade-down">
                Wayang is more than art – it's <span class="text-primary">wisdom passed</span> through generations 
                <img src="images/Vector.png" class="img-fluid w-100" alt="Pattern Border" style="max-width: 35px;" />
              </h1>
              
              <div class="d-flex gap-3 flex-column flex-md-row justify-content-center justify-content-md-start" data-aos="fade-down">
                <a href="#" class="btn btn-neon-enter fw-semibold rounded-pill px-6 py-2">Enter the World <img src="images/ArrowRight.png" class="img-fluid w-100" alt="Pattern Border" style="max-width: 20px;" /></a>
                <a href="#" class="btn btn-outline-light fw-semibold rounded-pill px-4 py-2">Scan, learn, and become part of the cultural journey</a>
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

      <section class="bg-black text-white py-5 position-relative overflow-hidden" >
        <div class="container position-relative z-1" >
          <div class="p-4 p-md-5 rounded-4 bg-glass text-white position-relative shadow-lg border border-2 border-white" data-aos="fade-down">
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
            <div class="col-md-6 position-relative z-1" data-aos="fade-down">
              <h2 class="fw-bold display-8 mb-4 text-danger" style="font-family: 'Dela Gothic One', cursive;">
                Discover Wayang with Arjuna –<br>Scan, Learn and Play
              </h2>

              <div class="p-4 rounded-4 bg-orange border border-4 border-black position-relative shadow-black" style="max-width: 420px;" data-aos="fade-down">
                <p class="text-black mb-3" style="font-family: 'Quicksand', sans-serif;">
                  Start by using a QR-ready phone and be walked effortlessly into wayang! Our Arjuna Scanner recognizes any wayang, shows its backstory in an instant, and even helps spark a battle in our exclusive digital battle game.
                </p>
                <a href="#/predic" class="btn-neon-green">Try It Now</a>

                <!-- Dekorasi: Bintang -->
                <img src="images/decoration-how-info-4.png" alt="star" class="position-absolute" style="top: -20px; left: -20px; width: 55px;">
              </div>

              <!-- Dekorasi: spiral garis -->
              <div class="icon position-absolute" style="top: 100px; left: 90%; transform: translateX(-50%);">
                <img src="images/redarrow.png" alt="spiral" style="width: 100px;">
              </div>
            </div>

            <!-- Kanan: Gambar Wayang -->
            <div class="col-md-6 mt-4 mt-md-0 text-center position-relative z-1" data-aos="fade-down">
              <div class="d-flex justify-content-center gap-2 flex-wrap">
                <img src="images/triowayang.png" class="img-fluid rotated-img" alt="Wayang" style="max-width: 500px;"
              </div>
            </div>
          </div>
        </div>
      </section>

   <!-- SECTION: Roadmap Arjuna -->
    <section id="plan" class="py-5 position-relative text-white" style="background-color: #2057FF; border-bottom-left-radius: 2rem; border-bottom-right-radius: 2rem;">
      <div class="container">
        <!-- Header -->
        <div class="text-center mb-5" data-aos="fade-down">
          <img src="images/circle.png" class="img-fluid mb-3 circle-icon" alt="circle visual" data-aos="fade-down"/>
          <h2 class="fw-bold text-dark bg-white px-4 py-2 rounded-pill d-inline-block" style="font-family: 'Dela Gothic One', cursive;" data-aos="fade-down">
            Building the Next Chapter of Arjuna
          </h2>
          <p class="mt-3 mx-auto" style="max-width: 700px;" data-aos="fade-down">
            Arjuna is more than just a cultural game—it's a growing platform to preserve and reintroduce wayang to the digital generation. Our journey is divided into two major phases over the next 6 months, beginning with a solid MVP and ending with full cultural integration and collaboration.
          </p>
        </div>

    <!-- Dua Phase Berjejer -->
    <div class="row align-items-center justify-content-center text-dark gy-5" data-aos="fade-down">
      <!-- Phase 1 -->
      <div class="col-md-5">
        <div class="phase-card position-relative mx-auto">
          <div class="phase-badge shadow-custom">
            Phase 1 – MVP Launch
          </div>
          <div class="phase-content p-3 mt-3">
            <p class="mb-0">
              We’ll launch a basic version of Arjuna with image recognition for 22 key wayang characters. Each identified character includes story-based insights and can be collected and used in a simple, turn-based educational battle game.
            </p>
          </div>
          <img src="images/redstar.png" alt="red star" class="star-decoration star-1">
        </div>
      </div>

      <!-- Arrow -->
      <div class="col-md-2 d-none d-md-flex justify-content-center">
        <img src="images/arrow.png" alt="arrow" class="img-fluid" style="height: 40px;" />
      </div>

      <!-- Phase 2 -->
      <div class="col-md-5">
        <div class="phase-card position-relative mx-auto">
          <div class="phase-badge shadow-custom">
            Phase 2 - Expansion & Collaboration
          </div>
          <div class="phase-content p-3 mt-3">
            <p class="mb-0">
              We’ll upgrade to a side-scrolling gameplay experience with enhanced visuals, character skills, and automated enemies. Partnerships with cultural institutions will help expand our dataset. A digital currency, Mandala, will be introduced to unlock skins, missions, and special content.
            </p>
          </div>
          <img src="images/lightning.png" alt="lightning" class="star-decoration star-2">
        </div>
      </div>
    </div>
  </div>
</section>



    <!-- SECTION 4: Team Arjuna -->
    <section id="team" class="bg-black text-white py-5 position-relative overflow-hidden">

       <div class="container d-flex justify-content-center align-items-center" style="min-height: 40vh;" data-aos="fade-down">
      <div class="custom-glass-box text-center">
        <h2 class="fw-bold custom-title mb-3">Meet the Minds Behind Arjuna</h2>
        <p class="mt-3 mx-auto custom-paragraph">
          Arjuna is built by a passionate team blending culture, code, and intelligence.
          Our Full Stack Developer crafts the entire user journey, and our Machine Learning Engineers power the AI 
          to recognize wayang characters smartly and seamlessly.
        </p>
      </div>
    </div>

      <div class="row g-4 justify-content-center" >
        
      <!-- Team Member Card 1 -->
      <div class="col-sm-6 col-md-4 col-lg-3" data-aos="fade-down">
        <div class="text-center my-3">
          <img src="images/Frame 74.png" alt="Nazila" class="rounded-4 shadow" style="width: 100%; height: auto;">
        </div>
      </div>

      <!-- Team Member Card 2 -->
      <div class="col-sm-6 col-md-4 col-lg-3" data-aos="fade-down">
        <div class="text-center my-3">
          <img src="images/Frame 75.png" alt="Nazila" class="rounded-4 shadow" style="width: 100%; height: auto;">
        </div>
      </div>

      <!-- Team Member Card 3 -->
      <div class="col-sm-6 col-md-4 col-lg-3" data-aos="fade-down">
        <div class="text-center my-3">
          <img src="images/Frame 76.png" alt="Nazila" class="rounded-4 shadow" style="width: 100%; height: auto;">
        </div>
      </div>
    </div>

    <div class="row g-4 justify-content-center" data-aos="fade-down">
      <!-- Team Member Card 1 -->
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="text-center my-3">
          <img src="images/Frame 77.png" alt="Nazila" class="rounded-4 shadow" style="width: 100%; height: auto;">
        </div>
      </div>

      <!-- Team Member Card 2 -->
      <div class="col-sm-6 col-md-4 col-lg-3" data-aos="fade-down">
        <div class="text-center my-3">
          <img src="images/Frame 78.png" alt="Nazila" class="rounded-4 shadow" style="width: 100%; height: auto;">
        </div>
      </div>

      <!-- Team Member Card 3 -->
      <div class="col-sm-6 col-md-4 col-lg-3" data-aos="fade-down">
        <div class="text-center my-3">
          <img src="images/Frame 79.png" alt="Nazila" class="rounded-4 shadow" style="width: 100%; height: auto;">
        </div>
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
