import analytics from './analytics';
import Page from './page';
import speakerData from '../data/speakers';
import modal from './modal';

class Router {
  constructor() {
    this.html = document.querySelector('html');
    this.state = {
      title: document.title,
      state: window.history.state || null,
      path: window.location.pathname || '',
      last: '',
    };

    this.pages = [...document.querySelectorAll('.Page')].map(element => {
      const page = new Page(element);
      page.elements.header.addEventListener('click', this.onRoute(page.path), true);
      page.elements.close.addEventListener('click', this.onRoute('/'), true);
      return page;
    });

    this.processPath(null, true);

    window.onpopstate = () => {
      this.processPath(window.location.pathname);
    };

    document.body.addEventListener('keyup', this.onKeypress);
  }

  onKeypress = (event) => {
    if (event.which === 27 && this.state.page) {
      this.navigate('/');
    }
  };

  processPath(path, instant) {
    const segments = (path || this.state.path).split('/');

    // Remove leading slash.
    segments.shift();

    // Default to index
    if (segments.length === 0) {
      segments.push('');
    } else if (segments[segments.length - 1] === 'index.html') {
      segments[segments.length - 1] = 'index';
    }

    if (segments.length > 1 && segments[0] === 'speakers') {
      const index = speakerData.findIndex(speaker => speaker.twitter === segments[1]);

      if (index > -1) {
        this.hasSpeaker = true;
        modal.open(speakerData[index], index);
      } else {
        segments.pop();
      }
    } else if (this.hasSpeaker) {
      modal.close();
      this.hasSpeaker = false;
    }

    // Set current path
    this.state.path = `/${segments.join('/')}`;
    this.replaceState();

    if (this.state.page) this.state.page.collapse(instant);

    this.state.page = this.pages.filter(page => this.state.path.includes(page.path))[0];

    if (this.state.page) this.state.page.expand(instant);

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
