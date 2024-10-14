import React from 'react'

const Button = ( {title, onClick, color} ) => {
  return (
    <button className='btn' onClick={onClick}>
        <span style={{ color: color }}> {title}</span>
    </button>
  )
}

export default Button;