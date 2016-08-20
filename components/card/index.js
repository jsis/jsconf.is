import React from 'react'
import InlineSvg from 'svg-inline-react'
import classnames from 'classnames'
import { Link } from 'react-router'
import './index.scss'

const Card = ({ link, title, icon, blank, onlyLarge, pushLeft }) => {
  const classes = classnames({
    'Card': true,
    'Card--interactive': !!link,
    'Card-blank': blank,
    'Card-pushLeft': pushLeft,
    'show-for-large': onlyLarge,
  })
  const content = [
    icon && <InlineSvg key="icon" className="CardIcon" src={require(`!svg-inline!../../images/${icon}.svg`)}/>,
    <span key="title" className="CardTitle">{title}</span>
  ]
  let body = null
  if (icon) {
    body = <Link className="Card-body" to={link}>{content}</Link>
  } else if (!blank) {
    body = <div className="Card-body">{content}</div>
  }

  return (
    <div className={classes}>{body}</div>
  )
}

Card.propTypes = {
  link: React.PropTypes.string,
  title: React.PropTypes.string,
  icon: React.PropTypes.string,
}

export default Card

export CardContainer from './container'
