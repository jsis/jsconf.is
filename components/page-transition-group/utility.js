const prefixes = {
  transform: ['transform', 'webkitTransform'],
  transition: ['transition', 'webkitTransition'],
}

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const centerPoint = rect => (
  {
    x: rect.left + rect.width * 0.5,
    y: rect.top + rect.height * 0.5,
  }
)

export function prefixed(style) {
  let prefixed = prefixes[style]
  if (prefixed == null) {
    prefixes[style] = prefixed = style
  }
  if (typeof prefixed === 'string') {
    return prefixed
  }
  for (let i = 0; i < prefixed.length; i++) {
    if (document.body.style[prefixed[i]] != null) {
      prefixes[style] = prefixed = prefixed[i]
      return prefixed
    }
  }
  return style
}

export function setStyles(element, styles) {
  console.log(element, styles)
  Object.keys(styles).forEach(style => {
    element.style[prefixed(style)] = styles[style]
  })
}
