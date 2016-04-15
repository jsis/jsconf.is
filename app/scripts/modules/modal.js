import router from './router';
import speakers from '../data/speakers';

class Modal {
  constructor(element) {
    this.element = element;
    this.sidebar = element.querySelector(Modal.selectors.sidebar);
    this.content = element.querySelector(Modal.selectors.content);
    this.closeBtn = element.querySelector(Modal.selectors.close);

    this.initEvents();
  }

  onClose = () => {
    this.close();
  };

  onKeyUp = ({ keyCode }) => {
    if (!this.isOpen) return;
    let index = this.index;

    switch (keyCode) {
      case 37: // Left arrow
        index = Math.max(0, index - 1);
        break;
      case 39: // Right arrow
        index = Math.min(speakers.length - 1, index + 1);
        break;
      default:
        return;
    }

    router.navigate(`/speakers/${speakers[index].twitter}`);
  };

  initEvents() {
    window.addEventListener('keyup', this.onKeyUp);
    this.closeBtn.addEventListener('click', this.onClose);
  }

  open(speaker, index) {
    if (this.index !== index) {
      this.data = speaker;
      this.index = index;
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
    this.sidebar.innerHTML = `<img src="/images/speakers/${speaker.twitter}.jpg" />`;

    this.content.innerHTML = [
      `<h2>${speaker.name}</h2>`,
      `<h4>${speaker.company}</h4>`,
      `<p>${speaker.description}</p>`,
    ].join('');
  }
}

Modal.classes = {
  noScroll: 'no-scroll',
};

Modal.selectors = {
  base: '[data-modal]',
  sidebar: '[data-modal-sidebar]',
  content: '[data-modal-content]',
  close: '[data-modal-close]',
};

export default new Modal(document.body.querySelector(Modal.selectors.base));
