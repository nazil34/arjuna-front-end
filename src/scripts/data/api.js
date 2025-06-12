import CONFIG from '../config';

const API = {
  async postImage(file) {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${CONFIG.BASE_URL}/predict`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Gagal memuat data prediksi.');
    }

    return response.json();
  },

  async login(email, password) {
    const response = await fetch(`${CONFIG.BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    return response.json();
  },

  async register(data) {
    const response = await fetch(`${CONFIG.BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }
};

export default API;

