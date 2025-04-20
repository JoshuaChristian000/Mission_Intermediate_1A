import React from 'react'

const Buttons = ({className = '', type = 'button', onClick, children}) => {
  return (
    <>
        <button className={`btn ${className}`} type={type} onClick={onClick}>
            {children}
        </button>
    </>
  )
}

export default Buttons