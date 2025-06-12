import PredictPresenter from '../predict/predict-presenter';

export default class PredictPage {
  async render() {
    return `
      <section id="how" class="section-highlight text-dark py-5 position-relative overflow-hidden bg-white rounded-top-5">
        <div class="container">
          <!-- Judul -->
          <div class="row mb-4">
            <div class="col-12 position-relative" data-aos="fade-down">
              <div class="d-flex align-items-start justify-content-between flex-wrap">
                <h2 class="fw-bold h2 text-danger mb-0" style="font-family: 'Dela Gothic One', cursive;">
                  Summon the Digital Wayang Within You
                </h2>
                <img src="images/decoration-header.png" alt="decoration" class="ms-3 d-none d-md-block" style="width: 60px;">
              </div>
              <p class="text-black mb-3" style="font-family: 'Quicksand', sans-serif;">
                Upload a shadow puppet, and witness the birth of its digital soul.
              </p>
            </div>
          </div>

          <!-- Konten Utama -->
          <div class="row align-items-center">
            <!-- Kiri -->
            <div class="col-md-7 position-relative z-1" data-aos="fade-down">
              <div id="predic" class="p-4 bg-orange border border-4 border-black position-relative rounded-4" style="max-width: 420px;">

                <!-- Area Upload -->
                <div id="upload-area" class="bg-white rounded-3 p-4 border border-dashed border-2 border-black text-center" style="min-height: 350px; cursor: pointer;">
                  <div id="upload-placeholder">
                    <img id="previewImage" src="/images/upload.png" alt="upload" style="width: 60px; margin-bottom: 10px;">
                    <p class="mb-0" style="font-family: 'Quicksand', sans-serif;">
                      Drag & drop your wayang image here or<br>click to upload.
                    </p>
                  </div>
                  <img id="uploadedImage" src="" alt="Uploaded" style="display: none; width: 100%; height: 100%; object-fit: contain; border-radius: 12px;">
                  <input type="file" id="imageInput" accept="image/*" style="display: none;">
                </div>

                <!-- Tombol Upload -->
                <div class="mt-3 text-start">
                  <button id="summonBtn" class="btn d-inline-flex align-items-center justify-content-between px-4 py-2 fw-bold" 
                    style="background-color: #C5FF47; color: black; border-radius: 999px; border: 2px solid black; box-shadow: 3px 3px black;">
                    Summon Character <span class="ms-2">→</span>
                  </button>
                </div>

                <!-- Loading -->
                <div id="loading-indicator" class="text-center mt-3" style="display: none;">
                  <div class="spinner-border text-dark" role="status"></div>
                  <p class="mt-2">Reading the sacred shadows...please wait</p>
                </div>

                <!-- Dekorasi -->
                <img src="images/decoration-how-info-4.png" alt="star" class="position-absolute" style="top: -20px; left: -20px; width: 55px;">
                <img src="images/flower.png" alt="flower" class="position-absolute" style="right: -20px; bottom: 30%; width: 80px;">
              </div>
              <div class="icon position-absolute" style="top: 100px; left: 90%; transform: translateX(-50%);">
                <img src="images/redarrow.png" alt="spiral" style="width: 100px;">
              </div>
            </div>

            <!-- Kanan -->
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
    const uploadArea = document.getElementById('upload-area');
    const imageInput = document.getElementById('imageInput');
    const previewImage = document.getElementById('previewImage');
    const uploadedImage = document.getElementById('uploadedImage');
    const uploadPlaceholder = document.getElementById('upload-placeholder');
    const summonButton = document.getElementById('summonBtn');
    const loadingIndicator = document.getElementById('loading-indicator');

    const toggleLoading = (isLoading) => {
      loadingIndicator.style.display = isLoading ? 'block' : 'none';
      summonButton.disabled = isLoading;
    };

    const handleFile = (file) => {
      if (!file || !file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        uploadPlaceholder.style.display = 'none';
        uploadedImage.src = event.target.result;
        uploadedImage.style.display = 'block';
      };
      reader.readAsDataURL(file);
    };

    uploadArea.addEventListener('click', () => imageInput.click());
    imageInput.addEventListener('change', (e) => handleFile(e.target.files[0]));
    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.classList.add('border-warning');
    });
    uploadArea.addEventListener('dragleave', () => {
      uploadArea.classList.remove('border-warning');
    });
    uploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.classList.remove('border-warning');
      handleFile(e.dataTransfer.files[0]);
    });

    summonButton.addEventListener('click', async (e) => {
      e.preventDefault();

      const file = imageInput.files[0];
      if (!file) {
        alert('Silakan upload gambar terlebih dahulu.');
        return;
      }

      toggleLoading(true);
      try {
        await PredictPresenter.predictAndSaveToLocal(file);
        window.location.hash = '#/result';
      } catch (error) {
        alert('Gagal melakukan prediksi. Coba lagi.');
      } finally {
        toggleLoading(false);
      }
    });
  }
}
