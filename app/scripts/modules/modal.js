import router from './router';
import speakers from '../data/speakers';

const speakerUrl = index => `/speakers/${speakers[index].slug}`;

class Modal {
  constructor(element) {
    this.element = element;
    this.sidebar = element.querySelector(Modal.selectors.sidebar);
    this.content = element.querySelector(Modal.selectors.content);
    this.prevBtn = element.querySelector(Modal.selectors.prev);
    this.nextBtn = element.querySelector(Modal.selectors.next);
    this.closeBtn = element.querySelector(Modal.selectors.close);

    this.initEvents();
  }

  onClose = () => {
    this.close();
  };

  onKeyUp = ({ keyCode }) => {
    if (!this.isOpen) return;

    switch (keyCode) {
      case 37: // Left arrow
        this.prev();
        break;
      case 39: // Right arrow
        this.next();
        break;
      default:
        return;
    }
  };

  onNext = () => this.next();

  onPrev = () => this.prev();

  next() {
    router.navigate(speakerUrl(this.nextIndex));
  }

  prev() {
    router.navigate(speakerUrl(this.previousIndex));
  }

  initEvents() {
    window.addEventListener('keyup', this.onKeyUp);
    this.closeBtn.addEventListener('click', this.onClose);
    this.nextBtn.addEventListener('click', this.onNext);
    this.prevBtn.addEventListener('click', this.onPrev);
  }

  open(speaker, index) {
    if (this.index !== index) {
      this.index = index;
      this.data = speaker;
    }

    this.element.setAttribute('aria-hidden', 'false');
    document.body.classList.add(Modal.classes.noScroll);
    this.isOpen = true;
  }

  close() {
    this.element.setAttribute('aria-hidden', 'true');
    document.body.classList.remove(Modal.classes.noScroll);
    this.isOpen = false;
  }

  set data(speaker) {
    this.sidebar.innerHTML = `<img src="/images/speakers/${speaker.slug}.jpg" />`;

    this.content.innerHTML = [
      `<h2>${speaker.name}</h2>`,
      speaker.companyWebsite
        ? `<p><a href="${speaker.companyWebsite}" target="_blank">${speaker.company}</a></p>`
        : `<p>${speaker.company}</p>`,
      `<h4>${speaker.title || 'TBA'}</h4>`,
      `${speaker.description}`,
    ].join('');

    this.previousIndex = this.index - 1;

    if (this.previousIndex < 0) {
      this.previousIndex = speakers.length - 1;
    }

    this.nextIndex = (this.previousIndex + 2) % speakers.length;
  }
}

Modal.classes = {
  noScroll: 'no-scroll',
};

Modal.selectors = {
  base: '[data-modal]',
  sidebar: '[data-modal-sidebar]',
  prev: '[data-modal-prev]',
  next: '[data-modal-next]',
  content: '[data-modal-content]',
  close: '[data-modal-close]',
};

export default new Modal(document.body.querySelector(Modal.selectors.base));
