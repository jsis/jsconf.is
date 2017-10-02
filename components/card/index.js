import React from 'react'
import InlineSvg from 'svg-inline-react'
import classnames from 'classnames'
import { Link } from 'react-router'
import './index.scss'

const outGoingRegex = /^(https?:)?\/\//i

const Card = ({ link, title, icon, blank, onlyLarge, pushLeft }) => {
  const classes = classnames({
    Card: true,
    'Card--interactive': !!link,
    'Card-blank': blank,
    'Card-pushLeft': pushLeft,
    'show-for-large': onlyLarge,
  })
  const content = [
    icon && <InlineSvg key="icon" className="CardIcon" src={require(`!svg-inline!../../images/${icon}.svg`)} />,
    <span key="title" className="CardTitle">{title}</span>,
  ]
  const body = !blank && (icon
    ? outGoingRegex.test(link)
      ? <a className="Card-body" href={link}>{content}</a>
      : <Link className="Card-body" to={link}>{content}</Link>
    : <div className="Card-body">{content}</div>)

  return (
    <div className={classes}>{body}</div>
  )
}

Card.propTypes = {
  link: React.PropTypes.string,
  title: React.PropTypes.string,
  icon: React.PropTypes.string,
  blank: React.PropTypes.bool,
  onlyLarge: React.PropTypes.bool,
  pushLeft: React.PropTypes.bool,
}

export default Card

export CardContainer from './container'
