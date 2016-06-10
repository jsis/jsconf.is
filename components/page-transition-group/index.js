import React, { Component, Children, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import ReactTransitionGroup from 'react-addons-transition-group'
import './index.scss'
import { delay } from './utility'
import { Part, PagePart, DURATION, findParts } from './parts'
import omit from 'lodash/omit'

class PageTransitionGroupChild extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    willEnterFunc: React.PropTypes.func.isRequired,
    willLeaveFunc: React.PropTypes.func.isRequired,
  }
  
  componentWillEnter(doneFn) {
    this.props.willEnterFunc(ReactDOM.findDOMNode(this), doneFn)
  }
  
  componentWillLeave(doneFn) {
    this.props.willLeaveFunc(ReactDOM.findDOMNode(this), doneFn)
  }
  
  render() {
    return (
      <div className="PageTransitionWrapper">
        {Children.only(this.props.children)}
      </div>
    )
  }
}

class PageTransitionGroup extends Component {
  static propTypes = {
    route: PropTypes.string,
  }

  previousRoute = null
  entering = null
  leaving = null
  scheduled = false
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.route != this.props.route) {
      this.previousRoute = this.props.route
    }
  }

  onChildWillEnter = (node, doneFn) => {
    this.entering = { node, route: this.props.route, doneFn }
    this.schedule()
  }

  onChildWillLeave = (node, doneFn) => {
    this.leaving = { node, route: this.previousRoute, doneFn }
    this.schedule()
  }

  onRunAnimation = async () => {
    let linkBox = this.leaving.node.querySelector(`[data-route="${this.entering.route}"]`)
    let base = this.leaving.node
    let overlay = this.entering.node
    let entering = true
    if (linkBox == null) {
      linkBox = this.entering.node.querySelector(`[data-route="${this.leaving.route}"]`)
      
      if (linkBox == null) {
        this.modalTransition()
        return
      }
      base = this.entering.node
      overlay = this.leaving.node
      entering = false
    }
    
    let parts = [new PagePart(overlay, linkBox)]
    parts.push(...findParts(overlay, linkBox))
    
    parts.forEach(part => entering ? part.enter() : part.leave())
    this.forceLayout(overlay)
    parts.forEach(part => entering ? part.enterActive() : part.leaveActive())
    await delay(DURATION)
    parts.forEach(part => part.reset())

    this.entering.doneFn()
    this.leaving.doneFn()
    this.scheduled = false
  }
  
  modalTransition() {
    // Todo
  }

  onWrapChild = child => (
    <PageTransitionGroupChild
      willEnterFunc={this.onChildWillEnter}
      willLeaveFunc={this.onChildWillLeave}
    >
      {child}
    </PageTransitionGroupChild>
  )

  schedule() {
    if (this.scheduled) {
      return
    }

    this.scheduled = true

    requestAnimationFrame(this.onRunAnimation)
  }

  clipToElement(element) {
    const { bottom, left, right, top } = element.getBoundingClientRect()
    return `rect(${top}px, ${right}px, ${bottom}px, ${left}px)`
  }
  
  forceLayout(element) {
    return element.offsetTop
  }

  render() {
    const props = omit(this.props, Object.keys(PageTransitionGroup.propTypes))
    props.childFactory = this.onWrapChild
    return <ReactTransitionGroup {...props} />
  }
}

module.exports = PageTransitionGroup
