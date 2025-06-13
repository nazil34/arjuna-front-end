import '../styles/styles.css';
import '../styles/home.css';
import '../styles/register.css';
import '../styles/result.css';
import '../styles/dashboard.css';
import '../styles/playgame.css';
import '../styles/gamepage.css';

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
    AuthStatus.check(); // ⬅️ Cek ulang setiap hash berubah
    await app.renderPage();
  });

  // Event logout button (delegasi atau langsung)
  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'logoutBtn') {
      e.preventDefault();
      AuthStatus.confirmLogout();
    }

    if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('SW registered:', reg))
      .catch(err => console.log('SW registration failed:', err));
  });
}

  });
});
