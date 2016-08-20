import React from 'react'
import './button.scss'

const PanelButton = ({ href, children, ...rest }) => (
  <span className="PanelButton">
    <a className="PanelButton-link" href={href} {...rest}>{children}</a>
    <span className="PanelButton-shadow" />
  </span>
)

PanelButton.propTypes = {
  href: React.PropTypes.string,
  children: React.PropTypes.node,
}

export default PanelButton
