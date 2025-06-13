import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';

class App {
  #content = null;
  #drawerButton = null;
  #navigationDrawer = null;

  constructor({ navigationDrawer, drawerButton, content }) {
    this.#content = content;
    this.#drawerButton = drawerButton;
    this.#navigationDrawer = navigationDrawer;

    this._setupDrawer();
  }

  _setupDrawer() {
    this.#drawerButton.addEventListener('click', () => {
      this.#navigationDrawer.classList.toggle('open');
    });

    document.body.addEventListener('click', (event) => {
      if (!this.#navigationDrawer.contains(event.target) && !this.#drawerButton.contains(event.target)) {
        this.#navigationDrawer.classList.remove('open');
      }

      this.#navigationDrawer.querySelectorAll('a').forEach((link) => {
        if (link.contains(event.target)) {
          this.#navigationDrawer.classList.remove('open');
        }
      })
    });
  }

  async renderPage() {
    try {
      const url = getActiveRoute();
    
      let page = routes[url];
      
      
      if (!page && url.includes('/:id')) {
        const baseRoute = url.replace('/:id', '');
        page = routes[baseRoute];
        console.log('Trying base route:', baseRoute, 'Found:', !!page);
      }
      
      if (!page) {
        console.error(`Route '${url}' not found in routes`);
        
        const defaultRoute = routes['/'];
        if (defaultRoute) {
          this.#content.innerHTML = await defaultRoute.render();
          await defaultRoute.afterRender();
        } else {
         
          this.#content.innerHTML = `
            <div class="error-page">
              <h1>404 - Page Not Found</h1>
              <p>Route '${url}' tidak ditemukan.</p>
              <a href="#/">Kembali ke Home</a>
            </div>
          `;
        }
        return;
      }

      if (typeof page.render !== 'function') {
        console.error(`Route '${url}' does not have a render method`);
        this.#content.innerHTML = `
          <div class="error-page">
            <h1>Error</h1>
            <p>Page tidak memiliki method render yang valid.</p>
          </div>
        `;
        return;
      }

      this.#content.innerHTML = await page.render();
      
      if (typeof page.afterRender === 'function') {
        await page.afterRender();
      }
      
    } catch (error) {
      console.error('Error rendering page:', error);
      this.#content.innerHTML = `
        <div class="error-page">
          <h1>Terjadi Kesalahan</h1>
          <p>Error: ${error.message}</p>
          <button onclick="location.reload()">Refresh Page</button>
        </div>
      `;
    }
  }
}

export default App;