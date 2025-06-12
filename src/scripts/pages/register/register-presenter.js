import API from '../data/api';

const RegisterPresenter = {
  async handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();

    if (!username || !email || !password) {
      alert('Semua field wajib diisi!');
      return;
    }

    try {
      const response = await API.register({ username, email, password });

      if (response.success) {
        alert('🎉 Registrasi berhasil! Silakan login.');
        window.location.href = '#/login'; // atau redirect ke halaman login
      } else {
        alert(`⚠️ Gagal registrasi: ${response.message}`);
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat registrasi.');
    }
  }
};

export default RegisterPresenter;
