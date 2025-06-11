export default class PredicPage {
  async render() {
    return `
    <section id="how" class="section-highlight text-dark py-5 position-relative overflow-hidden bg-white rounded-top-5">
      <div class="container">

     <!-- Judul Full Width -->
    <div class="row mb-4">
      <div class="col-12 position-relative" data-aos="fade-down">

        <div class="d-flex align-items-start justify-content-between flex-wrap">
          <h2 class="fw-bold h2 text-danger mb-0" 
              style="font-family: 'Dela Gothic One', cursive; word-break: break-word;">
            Summon the Digital Wayang Within You
          </h2>

          <!-- Dekorasi icon kanan sejajar -->
          <img src="images/decoration-header.png" alt="decoration" class="ms-3 d-none d-md-block"
              style="width: 60px; height: auto;">
        </div>

        <p class="text-black mb-3" style="font-family: 'Quicksand', sans-serif;">
          Upload a shadow puppet, and witness the birth of its digital soul.
        </p>

      </div>
    </div>

        <!-- Konten: Kiri (text + tombol), Kanan (gambar) -->
        <div class="row align-items-center">
          
         <div class="col-md-7 position-relative z-1" data-aos="fade-down">
            <div class="p-4 bg-orange border border-4 border-black position-relative rounded-4 shadow-black"
                style="max-width: 420px;">

              <!-- Area upload -->
              <div class="bg-white rounded-3 p-4 border border-dashed border-2 border-black text-center"
                  style="min-height: 350px;">
                <img src="images/upload.png" alt="upload" style="width: 30px; margin-bottom: 10px;">
                <p class="mb-0" style="font-family: 'Quicksand', sans-serif;">
                  Drag & drop your wayang image here or<br>click to upload.
                </p>
          </div>

          <!-- Tombol -->
          <div class="mt-3 text-start">
            <a href="#" class="btn d-inline-flex align-items-center justify-content-between px-4 py-2 fw-bold"
              style="background-color: #C5FF47; color: black; border-radius: 999px; border: 2px solid black; box-shadow: 3px 3px black;">
              Summon Character
              <span class="ms-2">→</span>
            </a>
          </div>

          <!-- Dekorasi bintang -->
          <img src="images/decoration-how-info-4.png" alt="star" class="position-absolute"
              style="top: -20px; left: -20px; width: 55px;">

          <!-- Dekorasi bunga -->
          <img src="images/flower.png" alt="flower" class="position-absolute"
              style="right: -20px; bottom: 30%; width: 80px;">
        </div>

        <!-- Spiral garis -->
        <div class="icon position-absolute" style="top: 100px; left: 90%; transform: translateX(-50%);">
          <img src="images/redarrow.png" alt="spiral" style="width: 100px;">
        </div>
      </div>


          <!-- Kanan: Gambar Wayang -->
          <div class="col-md-5 text-center position-relative z-1 mt-4 mt-md-0" data-aos="fade-down">
            <div class="d-flex justify-content-center">
              <img src="images/decoration-predic.png" class="img-fluid rotated-img" alt="Wayang" style="max-width: 600px;">
            </div>
          </div>

        </div>
      </div>
    </section>
    `;
  }

  async afterRender() {
    
  }
}
