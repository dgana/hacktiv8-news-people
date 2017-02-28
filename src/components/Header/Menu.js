import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <ul>
      <li>
        <Link to='/'> News
        </Link>
      </li>
      <li>
        <Link to='/people'> People
        </Link>
      </li>
    </ul>
  )
}
