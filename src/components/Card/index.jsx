import React from 'react'

import './style.scss'

const Card = ({className, children}) => (
  <div className={`card${className ? ` ${className}` : ''}`}>{children}</div>
)

export default Card


export const CardsRow = ({className, children}) => (
  <div className={`card-row${className ? ` ${className}` : ''}`}>{children}</div>
)