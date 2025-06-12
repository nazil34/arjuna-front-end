import API from '../../data/api';

const LoginPresenter = {
  async handleFormSubmit(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const loginBtn = document.getElementById('loginBtn');

    if (!email || !password) {
      alert('⚠️ Semua field wajib diisi!');
      return;
    }

    loginBtn.disabled = true;
    loginBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Continue the Adventure...`;

    try {
      const response = await API.login(email, password);

      if (response.success) {
        localStorage.setItem('token', response.token); // Simpan token di localStorage
        alert('🎉 Login berhasil!');
        window.location.href = '#/dashboard'; // Redirect ke halaman Dashboard
      } else {
        alert(`⚠️ Gagal login: ${response.message}`);
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat login.');
    } finally {
      loginBtn.disabled = false;
      loginBtn.innerHTML = `Continue the Adventure <span class="ms-2">→</span>`;
    }
  }
};

export default LoginPresenter;
