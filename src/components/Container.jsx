import React from 'react'

export default function Container({ children }) {
  return (
    <div className='border flex flex-col justify-center items-center gap-12 pt-12 px-6'>
      {children}
    </div>
  )
}
