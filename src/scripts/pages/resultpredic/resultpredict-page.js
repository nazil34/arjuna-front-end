import PredictPresenter from '../predict/predict-presenter';

export default class ResultPredictPage {
  async render() {
    return `
      <section class="funfact-section py-5">
        <div class="container">
          <div class="row align-items-center" id="result-container">
            <!-- Hasil prediksi akan dimuat di sini -->
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    const result = PredictPresenter.getSavedPrediction();
    const container = document.getElementById('result-container');

    if (!result) {
      container.innerHTML = `<p class="text-danger">Tidak ada data prediksi ditemukan. Silakan upload gambar terlebih dahulu.</p>`;
      return;
    }

    const wayang = result.wayang;

    container.innerHTML = `
      <div class="col-lg-8">
        <div class="card p-4 custom-card position-relative">
          <img src="images/star.png" class="position-absolute top-0 start-50 translate-middle icon-star" alt="Star Icon">
          <h3 class="fw-bold title-text">Funfact Karakter ${wayang.nama_karakter} - Sang ${wayang.kategori_karakter}</h3>
          <p class="text-white">${wayang.garis_keturunan}<br><br>${wayang.profile_singkat}<br><br>${wayang.karakteristik_dan_simbolisme}</p>
        </div>
      </div>
      <div class="col-lg-4 text-center mt-4 mt-lg-0 custom-img">
        <div class="card p-3 image-card text-white text-center">
          <img src="images/${wayang.nama_karakter.toLowerCase()}.png" class="img-fluid mb-2" alt="Wayang ${wayang.nama_karakter}">
          <div class="btn btn-primary w-100">${wayang.nama_karakter}</div>
        </div>
      </div>
    `;
  }
}
