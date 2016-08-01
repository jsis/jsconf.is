import React from 'react'

const CardContainer = ({ children }) => (
  <div className="CardContainer">{children}</div>
)

CardContainer.propTypes = {
  children: React.PropTypes.node,
}

export default CardContainer
