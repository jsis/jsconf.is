import React from 'react'
import InlineSvg from 'svg-inline-react'
import { Link } from 'react-router'
import './index.scss'

const Card = ({ link, title, icon }) => (
  <Link className="Card Card--interactive" to={link}>
    {icon && <InlineSvg className="CardIcon" src={require(`!svg-inline!../../images/${icon}.svg`)} />}
    <span className="CardTitle">{title}</span>
  </Link>
)

Card.propTypes = {
  link: React.PropTypes.string,
  title: React.PropTypes.string,
  icon: React.PropTypes.string,
}

export default Card

export CardContainer from './container'
