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
      siteTitle: root.querySelector('.Page-siteTitle'),
      content: root.querySelector('.Page-content'),
      close: root.querySelector('.Page-close'),
    };

    this.isExpanded_ = false;

    this.path = this.elements.root.getAttribute('js-route');
    this.parts_ = Object.keys(this.elements).filter(k => this.elements[k]);
  }

  collapse(instant) {
    this.transition(false, instant);
  }

  expand(instant) {
    this.transition(true, instant);
  }

  transition(isExpanding, instant) {
    if (isExpanding === this.isExpanded_) return;
    this.isExpanded_ = isExpanding;

    if (instant) {
      this.toggle_(isExpanding);
      return;
    }

    const oldProps = this.props;

    this.toggle_(isExpanding);

    const newProps = this.props;

    // When collapsing, restore expanded state for clip to work.
    if (isExpanding) {
      this.setTransform(oldProps, newProps, isExpanding);
    } else {
      this.toggle_(!isExpanding);
    }
    this.setClip(isExpanding ? oldProps.root : oldProps.wrap);
    this.forceLayout();

    this.elements.root.classList.add(Page.classes.isAnimating);
    if (isExpanding) {
      this.resetTransform();
    } else {
      this.setTransform(oldProps, newProps, isExpanding);
    }
    this.setClip(isExpanding ? newProps.wrap : oldProps.root);

    this.elements.wrap.addEventListener('transitionend', this.onTransitionEnd_);
    this.elements.wrap.addEventListener('webkittransitionend', this.onTransitionEnd_);
  }

  toggle_(expanded) {
    this.elements.root.classList.toggle(Page.classes.isOpen, expanded);
    document.body.classList.toggle(Page.classes.noScroll, expanded);
  }

  setClip(props) {
    const { bottom, left, right, top } = props;
    this.elements.wrap.style.clip = `rect(${top}px, ${right}px, ${bottom}px, ${left}px)`;
  }

  setTransform(oldProps, newProps, isExpanding) {
    const destination = isExpanding
      ? this.diff(oldProps, newProps)
      : this.diff(newProps, oldProps);
    const leftDifference = newProps.root.left - oldProps.root.left;
    const topDifference = newProps.root.top - oldProps.root.top;

    for (const part of this.parts_) {
      if (part === 'root' || part === 'wrap' || part === 'header') continue;
      const { left, top, scaleX, scaleY, opacity } = destination[part];
      const translate = `translate(${left + leftDifference}px, ${top + topDifference}px)`;
      Page.style(this.elements[part], `${translate} scale(${scaleX}, ${scaleY})`, opacity);
    }
  }

  resetTransform() {
    for (const part of this.parts_) {
      if (part === 'root') continue;
      Page.style(this.elements[part], '', '');
    }
  }

  onTransitionEnd_ = () => {
    const { root, wrap } = this.elements;
    root.classList.remove(Page.classes.isAnimating);

    wrap.style.clip = '';
    if (!this.isExpanded_) {
      this.resetTransform();
      this.toggle_(false);
    }

    wrap.removeEventListener('transitionend', this.onExpandTransitionEnd_);
    wrap.removeEventListener('webkittransitionend', this.onExpandTransitionEnd_);
  };

  forceLayout() {
    return this.elements.wrap.offsetTop;
  }

  diff(current, target) {
    const diff_ = {};

    for (const part of this.parts_) {
      const currentCenterX = current[part].left + current[part].width * .5;
      const currentCenterY = current[part].top + current[part].height * .5;
      const targetCenterX = target[part].left + target[part].width * .5;
      const targetCenterY = target[part].top + target[part].height * .5;
      diff_[part] = {
        height: current[part].height - target[part].height,
        left: currentCenterX - targetCenterX,
        opacity: 1 - (target[part].opacity - current[part].opacity),
        top: currentCenterY - targetCenterY,
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
