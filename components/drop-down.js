import React, { PropTypes } from 'react'
import classNames from 'classnames'
import Downshift from 'downshift'
import './drop-down.scss'

const Dropdown = ({ items, titleMap, label = '', active, onChange }) => {
  const id = label.toLowerCase().replace(/\s+/g, '-')
  return (
    <Downshift
      selectedItem={active}
      onChange={onChange}
      render={({
        isOpen,
        getLabelProps,
        getButtonProps,
        getItemProps,
        selectedItem,
      }) => (
        <div className={classNames('Dropdown', isOpen && 'is-open')}>
          <label className="Dropdown-label" {...getLabelProps({ htmlFor: id })}>
            {label}
          </label>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <button id={id} className="Dropdown-btn" {...getButtonProps()}>
              {active ? (titleMap ? titleMap[active] : active) : 'Click to choose'}
            </button>
            {isOpen && (
              <div className="Dropdown-menu">
                {items.map((item) => (
                  <button
                    {...getItemProps({ item })}
                    key={item}
                    className={classNames('Dropdown-item', selectedItem === item && 'is-active')}
                  >
                    {titleMap ? titleMap[item] : item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    />
  )
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  titleMap: PropTypes.any,
  active: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
}

export default Dropdown
