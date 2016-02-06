import analytics from './analytics';

class Router {
  constructor() {
    this.html = document.querySelector('html');
    this.state = {
      title: document.title,
      state: window.history.state || null,
      path: window.location.pathname || '',
      navigating: false,
      last: '',
    };

    this.setState('section', '');

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
    this.setState('section', section);
    this.replaceState();
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

  setState(key, value) {
    this.state[key] = value;
  }

  navigate(newPath) {
    this.state.path = newPath;
    this.pushState();
    this.processPath(newPath);
  }
}

export default new Router();
