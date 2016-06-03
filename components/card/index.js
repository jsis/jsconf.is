import React from 'react'
import SVG from 'svg-inline-react'
import { Link } from 'react-router'
import './index.scss'

const Card = ({ link, title, icon }) => (
  <Link className="Card" to={link}>
    <span className="CardContent">
      {icon && <SVG className="CardIcon" src={require(`!svg-inline!../../images/${icon}.svg`)} />}
      <span className="CardTitle">{title}</span>
    </span>
  </Link>
)

export default Card

export CardContainer from './container'
