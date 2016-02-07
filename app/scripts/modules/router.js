import analytics from './analytics';
import Page from './page';

class Router {
  constructor() {
    this.html = document.querySelector('html');
    this.state = {
      title: document.title,
      state: window.history.state || null,
      path: window.location.pathname || '',
      firstLoad: true,
      last: '',
    };

    this.pages = [...document.querySelectorAll('.Page')].map(element => {
      const page = new Page(element);
      page.elements.header.addEventListener('click', this.onRoute(page.path), true);
      page.elements.close.addEventListener('click', this.onRoute('/'), true);
      return page;
    });

    this.processPath();

    window.onpopstate = () => {
      this.processPath(window.location.pathname);
    };
  }

  processPath(path) {
    let section = (path || this.state.path).split('/')[1];

    section = section === 'index.html' ? 'index' : section;
    section = section || 'index';

    this.state.path = section === 'index' ? '/' : `/${section}`;
    this.replaceState();

    if (this.state.page) this.state.page.collapse();

    this.state.page = this.pages.filter(page => page.path === this.state.path)[0];

    if (this.state.page) this.state.page.expand(this.state.firstLoad);

    this.state.firstLoad = false;
  }

  pushState() {
    const state = this.state.state;
    const title = this.state.title;
    const path = this.state.path;
    window.history.pushState(state, title, path);

    analytics('send', 'pageview', {
      page: analytics.cleanUrl(path),
      title,
    });
  }

  replaceState() {
    window.history.replaceState(this.state.state, this.state.title, this.state.path);
  }

  navigate(newPath) {
    this.state.path = newPath;
    this.pushState();
    this.processPath(newPath);
  }

  onRoute = (path) => () => path !== this.state.path && this.navigate(path);
}

export default new Router();
