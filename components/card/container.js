import React from 'react'
import { Link } from 'react-router'

const CardContainer = ({ children }) => (
  <div className="CardContainer">{children}</div>
)

CardContainer.propTypes = {
  children: React.PropTypes.node,
}

export default CardContainer
