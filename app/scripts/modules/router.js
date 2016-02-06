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
    path = path || this.state.path;
    let section = path.split('/')[1];

    section = section === 'index.html' ? 'index' : section;
    section = section || 'index';

    this.state.path = section === 'index' ? '/' : `/${section}`;
    this.setState('section', section);
    this.replaceState();
  }

  pushState(state, title, path) {
    state = state || this.state.state;
    title = title || this.state.title;
    path = path || this.state.path;
    window.history.pushState(state, title, path);

    analytics('send', 'pageview', {
      page: analytics.cleanUrl(path),
      title: title,
    });
  }

  replaceState(state, title, path) {
    state = state || this.state.state;
    title = title || this.state.title;
    path = path || this.state.path;
    window.history.replaceState(state, title, path);
  }

  setState(key, value) {
    this.state[key] = value;
    this.html.setAttribute(key, value);
  }

  navigate(newPath) {
    this.state.path = newPath;
    this.pushState();
    this.processPath(newPath);
  }
}

export default new Router();
