import React, { Component } from 'react'
import logo from '../../logo.svg'
import '../../App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Menu } from './Menu'

export const Header = (props) => {
  return (
    <div>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Welcome to React</h2>
      </div>
      <Menu />
    </div>
  )
}
