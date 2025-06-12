import PredictModel from '../../data/predict-model';

const PredictPresenter = {
  async predictAndSaveToLocal(file) {
    try {
      const result = await PredictModel.postImage(file);

      if (result && result.wayang && result.prediction) {
        localStorage.setItem('predictionResult', JSON.stringify(result));
        return result;
      } else {
        throw new Error('Struktur data dari server tidak sesuai.');
      }

    } catch (error) {
      console.error('Gagal melakukan prediksi:', error);
      throw error;
    }
  },

  getSavedPrediction() {
    const data = localStorage.getItem('predictionResult');
    return data ? JSON.parse(data) : null;
  }
};

export default PredictPresenter;
