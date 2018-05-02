import React from 'react'

export default function Show(props) {
  const {title, faved} = props

  return (
    <div>
      {title}
      {' '}
      {faved ? '*' : ''}
    </div>
  )
}