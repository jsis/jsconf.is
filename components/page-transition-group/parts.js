import { centerPoint, setStyles, prefixed } from './utility'
import keyBy from 'lodash/keyBy'

export const DURATION = 500

class BasePart {
  constructor(element, source) {
    this.element = element
    this.source = source
  }

  enter() {
    this.setup(true)
    this.styleAsSource()
  }
  
  enterActive() {
    this.active(true)
    this.styleAsDefault()
  }
  
  leave() {
    this.setup(false)
    this.styleAsDefault()
  }
  
  leaveActive() {
    this.active(false)
    this.styleAsSource()
  }
  
  setup() {}
  styleAsSource() {}
  styleAsDefault() {}
  active() {}
  reset() {}
}

export class Part extends BasePart {
  styleAsSource() {
    const sourceRect = this.source.getBoundingClientRect()
    const sourceCenter = centerPoint(sourceRect)
    const currentRect = this.element.getBoundingClientRect()
    const currentCenter = centerPoint(currentRect)
    const translate = `translate(${sourceCenter.x - currentCenter.x}px, ${sourceCenter.y - currentCenter.y}px)`
    const scale = `scale(${sourceRect.width / currentRect.width}, ${sourceRect.height / currentRect.height})`

    setStyles(this.element, {
      transform: `${translate} ${scale}`,
      opacity: parseFloat(window.getComputedStyle(this.source).opacity),
    })
  }

  active() {
    setStyles(this.element, {
      transition: `${prefixed('transform')} ${DURATION}ms, opacity ${DURATION}ms`,
    })
  }
  
  styleAsDefault() {
    setStyles(this.element, {
      transform: '',
      opacity: '',
    })
  }

  reset() {
    setStyles(this.element, {
      transition: '',
      transform: '',
      opacity: '',
    })
  }
}

export class PagePart extends BasePart {
  constructor(element, source) {
    super(element, source)
    this.defaultClip = this.elementClip(element)
  }
  
  setup(entering) {
    setStyles(this.element, {
      zIndex: 1,
      overflowY: 'hidden',
    })
    this.element.classList.add(entering ? 'enter' : 'leave')
  }

  styleAsSource() {
    setStyles(this.element, {
      clip: this.elementClip(this.source),
    })
  }

  active(entering) {
    setStyles(this.element, {
      transition: `clip ${DURATION}ms`,
    })
    this.element.classList.add(entering ? 'enter-active' : 'leave-active')
  }

  styleAsDefault() {
    setStyles(this.element, {
      clip: this.defaultClip,
    })
  }

  reset() {
    this.element.classList.remove('enter', 'enter-active', 'leave', 'leave-active')
    setStyles(this.element, {
      transition: '',
      clip: '',
      overflowY: '',
      zIndex: '',
    })
  }

  elementClip(element) {
    const { bottom, left, right, top } = element.getBoundingClientRect()
    return `rect(${top}px, ${right}px, ${bottom}px, ${left}px)`
  }
}

export function findParts(page, box) {
  const parts = page.querySelectorAll('[data-part]')
  const boxParts = keyBy(box.querySelectorAll('[data-box-part]'), el => el.getAttribute('data-box-part'))
  console.log(parts, boxParts)
  return [...parts].map(part => new Part(part, boxParts[part.getAttribute('data-part')]))
}
