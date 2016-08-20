import React from 'react'
import './index.scss'

function Panel ({ children, hidden }) {
  return (
    <div className={`Panel${hidden ? ' Panel--invisible' : ''}`}>
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
  hidden: React.PropTypes.bool,
}

export default Panel

export PanelButton from './button'
