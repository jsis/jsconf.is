import React from 'react'
import './index.scss'

function Panel ({ children }) {
  return (
    <div className="Panel">
      <div className="Panel-header">
        <div className="Panel-headerButton" />
        <div className="Panel-headerButton" />
        <div className="Panel-headerButton" />
      </div>
      <div className="Panel-body">
        {children}
      </div>
    </div>
  )
}

Panel.propTypes = {
  children: React.PropTypes.node,
}

export default Panel

export PanelButton from './button'
