import '../styles/styles.css';
import '../styles/home.css';
import '../styles/register.css';
import '../styles/result.css';
import '../styles/dashboard.css';

import App from './pages/app';
import AuthStatus from './utils/auth-status'; // ⬅️ Import baru

document.addEventListener('DOMContentLoaded', async () => {
  AuthStatus.check(); // ⬅️ Periksa login di awal

  const app = new App({
    content: document.querySelector('#main-content'),
    drawerButton: document.querySelector('#drawer-button'),
    navigationDrawer: document.querySelector('#navigation-drawer'),
  });

  await app.renderPage();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
    AuthStatus.check(); // ⬅️ Cek ulang setiap hash berubah
  });

  // Event logout button (delegasi atau langsung)
  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'logoutBtn') {
      e.preventDefault();
      AuthStatus.confirmLogout();
    }
  });
});
