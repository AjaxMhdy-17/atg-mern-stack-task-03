import React from 'react'
import './error.css'

const ErrorMsg = ({error}) => {
  return (
    <div className='errorMsg'>
        {error}
    </div>
  )
}

export default ErrorMsg