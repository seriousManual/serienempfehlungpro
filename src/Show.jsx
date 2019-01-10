import React from 'react'

export default function Show(props) {
  const {title, faved} = props

  return (
    <React.Fragment>
      {title} {faved ? '*' : ''} <br />
    </React.Fragment>
  )
}