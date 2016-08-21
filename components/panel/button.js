import React from 'react'
import { Link } from 'react-router'
import './button.scss'

const PanelButton = ({ href, children, ...rest }) => (
  <span className="PanelButton">
    <Link className="PanelButton-link" to={href} {...rest}>{children}</Link>
    <span className="PanelButton-shadow" />
  </span>
)

PanelButton.propTypes = {
  href: React.PropTypes.string,
  children: React.PropTypes.node,
}

export default PanelButton
