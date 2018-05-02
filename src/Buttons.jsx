import React from 'react';

export default function Buttons(props) {
  const {order, filter, onOrder, onFilter} = props

  return (
    <div>
      sortieren: {' '}
        <a onClick={() => onOrder(null)} className={order === null ? 'active' : ''}>ohne</a>{' '}
        <a onClick={() => onOrder('alpha')} className={order === 'alpha' ? 'active' : ''}>alphabetisch aufwärts</a>{' '}
        <a onClick={() => onOrder('-alpha')} className={order === '-alpha' ? 'active' : ''}>alphabetisch abwärts</a>{' '}
        <a onClick={() => onOrder('mustsee')} className={order === 'mustsee' ? 'active' : ''}>mustsee</a>{' '}

      <br />

      filter:{' '}
        <a onClick={() => onFilter('mustsee')} className={filter === 'mustsee' ? 'active' : ''}>nur must-see</a>{' '}
        <a onClick={() => onFilter(null)} className={filter === null ? 'active' : ''}>alle</a><br />{' '}
    </div>
  )
}