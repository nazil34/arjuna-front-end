import PredictPresenter from '../predict/predict-presenter';

export default class ResultPredictPage {
  async render() {
    return `
      <section class="funfact-section py-5">
        <div class="container">
          <div class="d-flex flex-wrap align-items-start gap-4" id="result-container">
            <!-- Hasil prediksi akan dimuat di sini -->
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    const result = PredictPresenter.getSavedPrediction();
    const container = document.getElementById('result-container');

    if (!result || !result.wayang) {
      container.innerHTML = `
        <div class="w-100">
          <p class="text-danger">Tidak ada data prediksi ditemukan. Silakan upload gambar terlebih dahulu.</p>
        </div>`;
      return;
    }

    const wayang = result.wayang;

    // Format nama karakter jadi nama file gambar
    const imageFileName = wayang.nama_karakter
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_]/g, '');

    const imagePath = `images/arjuna-project/${imageFileName}.png`;

    container.innerHTML = `
      <!-- Card Keterangan Wayang -->
      <div class="card p-4 custom-card position-relative flex-grow-1" style="flex: 1 1 60%;">
        <img src="images/star.png" class="position-absolute top-0 start-50 translate-middle icon-star" alt="Star Icon">
        <h3 class="fw-bold title-text">Funfact Karakter ${wayang.nama_karakter} - Sang ${wayang.kategori_karakter}</h3>
        <p class="text-white">
          ${wayang.garis_keturunan}<br><br>
          ${wayang.profile_singkat}<br><br>
          ${wayang.karakteristik_dan_simbolisme}
        </p>
      </div>

      <!-- Card Gambar Wayang -->
      <div class="card p-3 image-card text-white text-center flex-grow-1" style="flex: 1 1 35%;">
        <img 
          src="${imagePath}" 
          class="img-fluid mb-2"
          alt="Wayang ${wayang.nama_karakter}"
          onerror="this.onerror=null; this.src='images/default.png';"
        >
        <div class="btn btn-primary w-100">${wayang.nama_karakter}</div>
      </div>
    `;
  }
}
