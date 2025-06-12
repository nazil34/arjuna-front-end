import RegisterModel from '../../data/register-model';

const RegisterPresenter = {
  async handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const registerBtn = document.getElementById('registerBtn');

    if (!username || !email || !password) {
      alert('⚠️ Semua field wajib diisi!');
      return;
    }

    if (password.length < 8) {
      alert('⚠️ Password harus minimal 8 karakter!');
      return;
    }

    registerBtn.disabled = true;
    registerBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Registering...
    `;

    try {
      const response = await RegisterModel.registerUser({ username, email, password });

      if (response.success) {
        alert('🎉 Registrasi berhasil! Silakan login.');
        window.location.href = '#/signin';
      } else {
        alert(`⚠️ Gagal registrasi: ${response.message}`);
      }
    } catch (error) {
      console.error('❌ Error saat registrasi:', error);
      alert('❌ Terjadi kesalahan saat registrasi.');
    } finally {
      registerBtn.disabled = false;
      registerBtn.innerHTML = `Begin Your Adventure <span class="ms-2">→</span>`;
    }
  }
};

export default RegisterPresenter;
