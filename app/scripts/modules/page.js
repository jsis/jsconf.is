class Page {
  /**
   * Construct a new Page
   * @param {HTMLElement} root
   */
  constructor(root) {
    this.elements = {
      root,
      wrap: root.querySelector('.Page-wrap'),
      header: root.querySelector('.Page-header'),
      icon: root.querySelector('.Page-icon'),
      title: root.querySelector('.Page-title'),
      content: root.querySelector('.Page-content'),
      close: root.querySelector('.Page-close'),
    };

    this.isExpanded_ = false;

    this.path = this.elements.root.getAttribute('js-route');
    this.parts_ = Object.keys(this.elements);
  }

  collapse() {
    if (!this.isExpanded_) {
      return;
    }

    this.isExpanded_ = false;
    this.elements.wrap.style.clip = `rect(0, ${window.innerWidth}px, ${window.innerHeight}px, 0)`;
    this.elements.root.classList.add(Page.classes.isAnimating);
    this.forceLayout();
    this.transformTo(this.diff(this.currentProps_, this.targetProps_));

    this.elements.wrap.addEventListener('transitionend', this.onCollapseTransitionEnd_);
    this.elements.wrap.addEventListener('webkittransitionend', this.onCollapseTransitionEnd_);
  }

  expand() {
    if (this.isExpanded_) {
      return;
    }

    this.startPosition_ = this.elements.root.getBoundingClientRect();
    this.currentProps_ = this.props;

    this.elements.root.classList.add(Page.classes.isOpen);
    this.isExpanded_ = true;

    this.targetProps_ = this.props;
    this.transformTo(this.diff(this.currentProps_, this.targetProps_));
    this.forceLayout();

    this.elements.root.classList.add(Page.classes.isAnimating);
    this.transformToZero();

    this.elements.wrap.addEventListener('transitionend', this.onExpandTransitionEnd_);
    this.elements.wrap.addEventListener('webkittransitionend', this.onExpandTransitionEnd_);
  }

  transformTo(destination) {
    const currentPosition = this.elements.root.getBoundingClientRect();
    const leftDifference = currentPosition.left - this.startPosition_.left;
    const topDifference = currentPosition.top - this.startPosition_.top;

    for (const part of this.parts_) {
      if (part === 'root' || part === 'wrap' || part === 'header') continue;
      const { left, top, scaleX, scaleY, opacity } = destination[part];
      const translate = `translate(${left + leftDifference}px, ${top + topDifference}px)`;
      Page.style(this.elements[part], `${translate} scale(${scaleX}, ${scaleY})`, opacity);
    }

    const { bottom, left, right, top } = this.currentProps_.root;

    const clipLeft = left + leftDifference;
    const clipRight = right + leftDifference;
    const clipTop = top + topDifference;
    const clipBottom = bottom + topDifference;

    this.elements.wrap.style.clip = `rect(${clipTop}px, ${clipRight}px, ${clipBottom}px, ${clipLeft}px)`;
  }

  transformToZero() {
    for (const part of this.parts_) {
      if (part === 'root') continue;
      Page.style(this.elements[part], 'translate(0, 0) scale(1)', this.targetProps_[part].opacity);
    }

    const { bottom, left, right, top } = this.targetProps_.wrap;
    this.elements.wrap.style.clip = `rect(${top}px, ${right}px, ${bottom}px, ${left}px)`;
  }

  forceLayout() {
    return this.elements.wrap.offsetTop;
  }

  diff(current, target) {
    const diff_ = {};

    for (const part of this.parts_) {
      diff_[part] = {
        height: current[part].height - target[part].height,
        left: current[part].left - target[part].left,
        opacity: 1 - (target[part].opacity - current[part].opacity),
        top: current[part].top - target[part].top,
        width: current[part].width - target[part].width,
        scaleX: current[part].width / target[part].width,
        scaleY: current[part].height / target[part].height,
      };
    }

    return diff_;
  }

  get props() {
    const props_ = {};

    for (const part of this.parts_) {
      const element = this.elements[part];
      const { bottom, height, left, right, top, width } = element.getBoundingClientRect();

      props_[part] = {
        bottom,
        height: Math.min(height, window.innerHeight),
        left,
        opacity: parseFloat(window.getComputedStyle(element).opacity),
        right,
        top,
        width: Math.min(width, window.innerWidth),
      };
    }

    return props_;
  }

  onExpandTransitionEnd_ = () => {
    this.elements.root.classList.remove(Page.classes.isAnimating);

    for (const part of this.parts_) {
      Page.style(this.elements[part], '', '');
    }

    this.elements.wrap.style.clip = '';
    document.body.classList.add(Page.classes.noScroll);

    this.elements.wrap.removeEventListener('transitionend', this.onExpandTransitionEnd_);
    this.elements.wrap.removeEventListener('webkittransitionend', this.onExpandTransitionEnd_);
  };

  onCollapseTransitionEnd_ = () => {
    this.elements.root.classList.remove(Page.classes.isAnimating);
    this.elements.root.classList.remove(Page.classes.isOpen);

    for (const part of this.parts_) {
      Page.style(this.elements[part], '', '');
    }

    this.elements.wrap.style.clip = '';
    document.body.classList.remove(Page.classes.noScroll);

    this.elements.wrap.removeEventListener('transitionend', this.onCollapseTransitionEnd_);
    this.elements.wrap.removeEventListener('webkittransitionend', this.onCollapseTransitionEnd_);
  };

  static style(element, transform, opacity) {
    /* eslint-disable no-param-reassign */
    element.style.webkitTransform = transform;
    element.style.transform = transform;
    element.style.opacity = opacity;
    /* eslint-enable no-param-reassign */
  }

  static classes = {
    isAnimating: 'is-animating',
    isOpen: 'is-open',
    noScroll: 'no-scroll',
  };
}

export default Page;
