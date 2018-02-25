import React from 'react'
import './discount.scss'

const Discount = ({ company, value, description }) => ! company ? null :
  <a href={company.website} className="Discount u-base-link">
    <span className="Discount-company">{company.name}</span>
    <span className="Discount-value">{value}</span>
    <span className="Discount-description">{description}</span>
  </a>

export default Discount
